import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function header() {
  return (
    <Container>
      <Link to="/">
        <span>Users</span>
      </Link>
      <Link to="/paymethod">
        <span>Paymethod</span>
      </Link>
    </Container>
  );
}
