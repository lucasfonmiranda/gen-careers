import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Transactions from '~/pages/Transactions';
import Clients from '~/pages/Clients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/clients" component={Clients} isPrivate />
      <Route path="/transactions" component={Transactions} isPrivate />
    </Switch>
  );
}
