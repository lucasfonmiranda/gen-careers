import React from 'react';
import { Switch, Route } from 'react-router-dom';

import User from './pages/user';
import Paymethod from './pages/pagamento';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={User} />
      <Route path="/paymethod" component={Paymethod} />
    </Switch>
  );
}
