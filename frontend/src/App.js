import React from 'react';

import Routes from './routes';
import GlobalStyle from './styles/global'

import Header from './components/header/index';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <GlobalStyle />
    </>
  )
}

export default App;
