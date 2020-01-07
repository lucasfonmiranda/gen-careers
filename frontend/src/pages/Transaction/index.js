import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [name, setName] = useState('');
  const [paymentService, setPaymentService] = useState('');

  async function loadTransactions(nameInput, payServ) {
    const { data } = await api.get('/transactions', {
      params: {
        name: nameInput,
        ps: payServ,
      },
    });
    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions(name, paymentService);
  }, [name, paymentService]);

  return (
    <>
      <Header />
      <Container>
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Digite um nome"
        />
        <p>Serviço de pagamento</p>
        <select
          name="payment_service"
          onChange={event => setPaymentService(event.target.value)}
        >
          <option defaultChecked value="">
            Todos
          </option>
          <option value="Mercado Pago">Mercado Pago</option>
          <option value="Paypal">Paypal</option>
          <option value="Stripe">Stripe</option>
        </select>
        <table>
          <caption>Transactions</caption>
          <thead>
            <tr>
              <th>Email do cliente</th>
              <th>Hash de autorização</th>
              <th>Serviço de pagamento</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(item => (
              <tr key={item._id}>
                <td data-label="Email do cliente">{item.client_email}</td>
                <td data-label="Hash de autorização">{item.authorization}</td>
                <td data-label="Serviço de pagamento">
                  {item.payment_service}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
