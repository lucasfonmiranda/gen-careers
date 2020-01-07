import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">Clientes</Link>
          <Link to="/transactions">Transações</Link>
        </nav>
      </Content>
    </Container>
  );
}
