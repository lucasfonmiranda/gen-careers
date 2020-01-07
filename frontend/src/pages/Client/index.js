import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Client() {
  const [clients, setClients] = useState([]);

  async function loadClients() {
    const { data } = await api.get('/clients');

    setClients(data);
  }

  useEffect(() => {
    loadClients();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <table>
          <caption>Clients</caption>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(item => (
              <tr key={item._id}>
                <td data-label="Name">{item.name}</td>
                <td data-label="Email">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}
