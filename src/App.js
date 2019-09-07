import 'dotenv/config';

import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles';
import Header from './components/Header';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
