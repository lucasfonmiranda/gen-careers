import { takeLatest, call, put, all } from 'redux-saga/effects';
import { message } from 'antd';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { cpf, password } = payload;

    const response = yield call(api.post, 'sessions', {
      cpf,
      password,
    });

    const { token, client } = response.data;

    if (!client.manager) {
      message.error('User is not a manager', 3);
      yield put(signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, client));
    message.success(`Welcome ${client.name} !`);
    history.push('/clients');
  } catch (error) {
    message.error('User authentication failure. Review your CPF or Password', 3);
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, cpf, password } = payload;

    yield call(api.post, 'clients', {
      name,
      cpf,
      password,
      manager: true,
    });
    message.success('User successfully registered');
    history.push('/');
  } catch (error) {
    message.error('Fail to register the user, check the data', 3);
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
