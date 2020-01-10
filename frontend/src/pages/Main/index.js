import React, { Component } from 'react';

import api from '../../services/api';
import { Lista } from './styles';

export default class Main extends Component {
  state = {
    clients: [],
  };

  async componentDidMount() {
    const response = await api.get(`/clients`);
    console.log(response);
    this.setState({
      clients: response,
    });
  }

  render() {
    const { clients } = this.state;
    return (
      <>
        <Lista>
          {clients.map(client => (
            <li key={client.id}>
              <p>{client.name}</p>
              <p>{client.email}</p>
            </li>
          ))}
        </Lista>
      </>
    );
  }
}
