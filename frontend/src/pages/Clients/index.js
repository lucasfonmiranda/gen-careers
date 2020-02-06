import React, { useState, useEffect } from 'react';
import api from '~services/api';
import { ClientList } from './styles';

export default function Clients() {
  const [clients, setClient] = useState([]);

  useEffect(() => {
    async function loadClients() {
      const response = await api.get('clients');

      setClient(response.data);
    }
    loadClients();
  }, []);
  return (
    <ClientList>
      {clients.map(client => (
        <li key={client.id}>
          <p>id: {client.id} </p>
          <p>Nome: {client.name}</p>
          <p>CPF: {client.cpf}</p>
          <p>Balance: R$ {client.balance || '0.00'}</p>
        </li>
      ))}
    </ClientList>
  );
}
