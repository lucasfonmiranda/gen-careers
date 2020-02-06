import { combineReducers } from 'redux';
import auth from './auth/reducer';
import client from './client/reducer';

export default combineReducers({ auth, client });
