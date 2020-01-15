import React from 'react';

import { Link } from 'react-router-dom';


import { Container, Options, Content } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">MENU</Link>
        </nav>

        <aside>
          <Options>
            <div>
              <Link to="/list-clients">List Clients</Link>
            </div>
            <div>
              <Link to="/list-transactions">List Transactions</Link>
            </div>
          </Options>
        </aside>
      </Content>
    </Container>
  );
}
