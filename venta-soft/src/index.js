import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MVentasVentaNueva from './pages/MVentasVentaNueva';
import MVentasLista from './pages/MVentasLista';
ReactDOM.render(<> <MVentasVentaNueva/><MVentasLista/> </>
,


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
