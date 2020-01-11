import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Container from '../../components/container';
import Footer from '../../components/footer';
import { List } from './styles';

export default function Home() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get(`/clients`);
      setClients(response.data);
    }

    loadClients();
  }, [setClients]);

  return (
    <Container>
      <h1>Lista de Usuários!</h1>

      <List>
        {clients.map(client => (
          <li key={client.id}>
            Cliente: <span>{client.name}</span>
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
