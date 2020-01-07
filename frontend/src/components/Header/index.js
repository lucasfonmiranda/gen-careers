import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

export default function Header() {

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">Clients</Link>
          <Link to="/transactions">Transactions</Link>
        </nav>
      </Content>
    </Container>
  );
}
