import React, { Component } from 'react';
import api from '../../services/api';

import Container from '../../components/container';
import Footer from '../../components/footer';
import { List } from './styles';

export default class Payment extends Component {
  state = {
    payments: [],
  };

  async componentDidMount() {
    const response = await api.get(`/paymethod`);
    console.log(response);
    this.setState({
      payments: response.data,
    });
  }

  render () {
    const { payments } = this.state;

    return (
      <Container>
        <h1>Lista de Pagamentos</h1>

        <List>
        {payments.map(payment => (
            <li key={payment.id}>
              Nome do Cliente: <span>{payment.name_client}</span>
              Method: <span>{payment.payment}</span>
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
