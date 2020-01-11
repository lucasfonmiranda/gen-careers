import React, { Component } from 'react';
import { FaEraser } from 'react-icons/fa';
import api from '../../services/api';

import Container from '../../components/container';
import Footer from '../../components/footer';
import { Form, SubmitButton, List } from './styles';

export default class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      newPay: '',
      payments: [],
      error: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const response = await api.get(`/paymethod`);
    this.setState({
      payments: response.data,
    });
  }

  handleChange(e) {
    const { payments } = this.state;
    const textSearched = e.target.value;

    const paymentsFiltered = payments.filter(payment =>
      payment.name_client.includes(textSearched)
    );
    this.setState({ value: e.target.value });
    this.setState({ payments: paymentsFiltered });
  }

  async handleClick(e) {
    const response = await api.get(`/paymethod`);
    this.setState({
      payments: response.data,
    });
    e.preventDefault();
  }

  render() {
    const { payments } = this.state;

    return (
      <Container>
        <h1>Lista de Pagamentos</h1>
        <Form onSubmit={this.handleClick}>
          <input
            type="text"
            placeholder="Filtrar cliente"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <SubmitButton>
            <FaEraser color="#FFF" size={14} />
            <span>Limpar</span>
          </SubmitButton>
        </Form>
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
