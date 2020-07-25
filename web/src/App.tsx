import React from 'react';
import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import GlobalStyle from './styles/global';
import './App.css';

function App() {
  return (
    <div>
      <Routes />
      <GlobalStyle />
      <ToastContainer autoClose={4000} />
    </div>
  );
}

export default App;
