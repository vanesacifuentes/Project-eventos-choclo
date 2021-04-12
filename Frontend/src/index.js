import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Registro_Usuario from './components/registro_usuario';
//import Registro_Usuario from './components/registro_usuario';
import Menu from './components/Menu/Menu';
import LoginUser from './components/Login/login-user';
import Footer from './components/Footer/footer';
import Home from './components/Home/Home';
import Eventos from './components/Eventos/Eventos'
import Contacto from './components/Contacto/Contacto'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


ReactDOM.render(

  <Router>

    <div>
      <Switch>

        <Route exact path='/' component={Home}/>
        <Route exact path='/eventos' component={Eventos}/>
        <Route exact path='/contacto' component={Contacto}/>
        <Route exact path='/loginuser' component={LoginUser}/>

      </Switch>
    </div>

  </Router>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
