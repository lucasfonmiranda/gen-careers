import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Transactions from './pages/Transactions';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/transactions" component={Transactions} />
      </Switch>
    </BrowserRouter>
  );
}
