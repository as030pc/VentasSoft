import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import MVentasNueva from './pages/MVentasNueva';
import MVentasLista from './pages/MVentasLista';
import MVentasModificar from 'pages/MVentasModificar';



ReactDOM.render(
    
  <React.StrictMode>,
  
    <MVentasModificar/>

    </React.StrictMode>,
    document.getElementById('root')

  )
