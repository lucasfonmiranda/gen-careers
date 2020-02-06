import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

// import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Full name can`t be blank'),
  cpf: Yup.string().required('CPF can`t be blank '),
  password: Yup.string()
    .required('Password can`t be blank')
    .min(6),
});
export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, cpf, password }) {
    dispatch(signUpRequest(name, cpf, password));
  }
  return (
    <>
      <h1>GenBank</h1>
      <h2>Manager</h2>
      <img src={logo} alt="GenBank" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Full name" />
        <Input name="cpf" placeholder="Your cpf" />
        <Input name="password" type="password" placeholder="Your password" />
        {/* <Input name="balance" placeholder="Your balance" type="double" /> */}

        <button type="submit">Create account</button>
        <Link to="/">I alread have a account</Link>
      </Form>
    </>
  );
}
