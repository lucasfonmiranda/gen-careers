import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';
import { signOut } from '~/store/modules/auth/actions';

import { Container, Content } from './styles';
const { confirm } = Modal;

export default function Header() {
  const dispatch = useDispatch();

  function showConfirm() {
    confirm({
      title: 'Attention',
      content: 'Do you want log out? Click ok for yes.',
      onOk() {
        dispatch(signOut(showConfirm));
      },
      onCancel() {},
    });
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GenBank" />
          <Link to="/clients">Clients</Link>
          <Link to="/transactions">Transactions</Link>
        </nav>
        <aside>
          <Button type="danger" onClick={showConfirm}>
            Log Out
          </Button>
        </aside>
      </Content>
    </Container>
  );
}
