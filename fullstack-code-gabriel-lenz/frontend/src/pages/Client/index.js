import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Header from '../../components/Header';

import { Container } from './styles';

export default function Client() {
  const [clients, setClients] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const mybutton = document.getElementById('goToTopButton');

  async function loadClients() {
    const { data } = await api.get('/clients', {
      params: { name, page: Number(page), perPage: Number(perPage) },
    });

    setClients(data);
  }

  useEffect(() => {
    loadClients();
  }, [name, page, perPage]);

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = 'block';
    } else {
      mybutton.style.display = 'none';
    }
  }

  window.onscroll = () => {
    scrollFunction();
  };

  function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Header />
      <Container>
        <p>Nome</p>
        <input
          type="text"
          name="name"
          value={name}
          onChange={event => setName(event.target.value)}
          placeholder="Digite um nome"
        />
        <table>
          <caption>Clientes</caption>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {clients.map(item => (
              <tr key={item._id}>
                <td data-label="Nome">{item.name}</td>
                <td data-label="Email">{item.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <section className="pagination">
          <p>Quantidade por página</p>
          <select
            name="per_page"
            onChange={event => setPerPage(event.target.value)}
          >
            <option defaultChecked value="10">
              10
            </option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
          <div>
            {page > 1 ? (
              <button type="button" onClick={() => setPage(page - 1)}>
                Voltar
              </button>
            ) : null}
            {page > 2 ? (
              <button type="button" onClick={() => setPage(1)}>
                Início
              </button>
            ) : null}
            <button type="button" onClick={() => setPage(page + 1)}>
              Avançar
            </button>
          </div>
        </section>
        <button
          type="button"
          onClick={() => goToTop()}
          id="goToTopButton"
          title="Go to top"
        >
          Topo
        </button>
      </Container>
    </>
  );
}
