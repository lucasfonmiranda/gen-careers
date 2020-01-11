import React, { Component } from 'react';
import api from '../../services/api';

import Container from '../../components/container';
import Footer from '../../components/footer';
import { List } from './styles';

export default class Home extends Component {
  state = {
    clients: [],
  };

  async componentDidMount() {
    const response = await api.get(`/clients`);
    console.log(response);
    this.setState({
      clients: response.data,
    });
  }

  render () {
    const { clients } = this.state;

    return (
      <Container>
        <h1>Lista de Usuários!</h1>

        <List>
        {clients.map(client => (
            <li key={client.id}>
              Name: <span>{client.name}</span>
              Email: <span>{client.email}</span>
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
