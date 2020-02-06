import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.svg';

// import { Container } from './styles';

const schema = Yup.object().shape({
  cpf: Yup.string().required('CPF can`t be blank '),
  password: Yup.string().required('Password can`t be blank'),
});

export default function SignIn() {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ cpf, password }) {
    dispatch(signInRequest(cpf, password));
  }

  return (
    <>
      <h1>GenBank</h1>
      <h2>Manager</h2>
      <img src={logo} alt="GenBank" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="cpf" placeholder="Your cpf" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit">{loading ? 'Loading...' : 'Sign In'}</button>
        <Link to="/register">Sign up</Link>
      </Form>
    </>
  );
}
