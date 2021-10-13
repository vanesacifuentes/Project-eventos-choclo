import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './components/Perfil_usuario/Context/Context';
import App_admin from './components/Perfil_administrador/Home/App_admin';


ReactDOM.render(
      <UserProvider > <App/> </UserProvider>
      //<UserProvider > <App_admin/> </UserProvider>
      
      ,
      document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
