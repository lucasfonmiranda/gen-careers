import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Client from '../pages/Client';
import Transaction from '../pages/Transaction';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Client} />
      <Route path="/transactions" component={Transaction} />
    </Switch>
  );
}
