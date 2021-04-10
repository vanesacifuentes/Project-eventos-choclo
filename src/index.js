import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registro_Usuario from './components/registro_usuario';
//import Registro_Usuario from './components/registro_usuario';
import Inicio from './components/inicio_principal';
import HeaderEventos from './components/header_eventos';
import Menu from './components/Menu/Menu';
import Login from './components/Login/login';


ReactDOM.render(
  <React.StrictMode>
    <Login/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
