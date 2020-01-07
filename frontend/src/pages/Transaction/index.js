import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Transaction() {
  const [transactions, setTransactions] = useState([]);

  async function loadTransactions(name) {
    const { data } = await api.get('/transactions', {
      name,
    });

    setTransactions(data);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  return (
    <>
      <Header />
      <Container>
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
