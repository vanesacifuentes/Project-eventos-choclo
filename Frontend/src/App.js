import Home from './components/Home/Home';
import Eventos from './components/Eventos/Eventos'
import Contacto from './components/Contacto/Contacto'
import Register_User from './components/Registro/register_user';
import LoginUser from './components/Login/login-user';
import Boleteria from './components/Boleteria/Boleteria';
import Compra_boleta from './components/Boleteria/Compra_boleta';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Compra_boletas from './components/Boleteria/Compra_boleta';
import { useState } from 'react';



function App() {

  const [user,setUser]= useState()


  async function userF(u){
    alert(u.nombre)
    setUser(u);
  }


  return (
    <>
            <Router>
              <div>
                <Switch>

                  <Route exact path='/'> <Home user={user}/> </Route>
                  <Route exact path='/eventos' component={Eventos}/>
                  <Route exact path='/contacto' component={Contacto}/>
                  <Route exact path='/loginuser'> <LoginUser userF={userF} /> </Route>
                  <Route exact path='/registeruser' component={Register_User}/>
                  <Route exact path='/boleteria' component={Boleteria}/>
                  <Route exact path='/compra_boleta' component={Compra_boleta}/>

                </Switch>
              </div>

            </Router>
      </>
  );
}

export default App;
