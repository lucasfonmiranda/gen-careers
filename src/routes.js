import React from 'react';

import {Route, Switch} from 'react-router-dom';

import Menu from './pages/Menu';
import ListClients from './pages/ListClients';
import ListTransactions from './pages/ListTransactions';


export default function Routes(){
  return (
    <Switch>
      <Route path="/" exact component={Menu} />
      <Route path="/list-clients" component={ListClients} />
      <Route path="/list-transactions" component={ListTransactions} />
    </Switch>
  )
}

