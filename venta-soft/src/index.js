import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppRouter from './routers/AppRouter';
import MVentasVentaNueva from './pages/MVentasVentaNueva';
import MUsuariosLista from './pages/MUsuariosLista';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
