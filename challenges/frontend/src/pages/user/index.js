import React, { Component } from 'react';
import { FaPlus, FaSpinner } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/container';
import Footer from '../../components/footer';
import { Form, SubmitButton, List } from './styles';

export default class Home extends Component {
  state = {
    newUser: '',
    user: [],
    loading: false,
    error: null,
  };

  // Carrega os dados do localStorage
  componentDidMount() {
    const users = localStorage.getItem('users');

    if(users) {
      this.setState({ users: JSON.parse(users) });
    }
  }

  // Salva os dados no localStorage
  componentDidUpdate(_,prevSatet) {
    const { users } = this.state;

    if(prevSatet.users !== users){
      localStorage.setItem('users', JSON.stringify(users));
    }
  }

  handleInputChange = e => {
    this.setState({ newUser: e.target.value, error: null });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: false });

    try {
      const { newUser, users } = this.state;

      if(newUser === '') throw 'Você precisa digitar um User';

      const hasUser = users.find(r => r.name === newUser);

      if(hasUser) throw 'User duplicado';

      const response = await api.get(`/users/${newUser}`);

      const data = {
        name: response.data.name,
        paymethod: response.data.forma_pagamento_id,
      };

      this.setState({
        users: [...users, data],
        newUser: '',
      });
    } catch (err) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  render () {
    const { newUser, users, loading, error } = this.state;

    return (
      <Container>
        <h1>Buscar Usuários!</h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="buscar usuário"
            value={newUser}
            onChange={this.handleInputChange}
          />

          <SubmitButton loading={loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>

        <List>
        {users.map(usuario => (
            <li key={usuario.name}>
              Name: <span>{usuario.name}</span>
              Paymethod: <span>{usuario.paymethod}</span>
            </li>
          ))}
        </List>

        <Footer>
          <span>Desenvolvido por Gustavo Prizon</span>
        </Footer>
      </Container>
    );
  }
}
