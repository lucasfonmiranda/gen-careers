import React from 'react';
import { Switch, Route } from 'react-router-dom';

import User from './pages/user';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={User} />
    </Switch>
  );
}
