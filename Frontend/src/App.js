import Home from './components//Perfil_usuario/Home/Home';
import Eventos from './components//Perfil_usuario/Eventos/Eventos'
import Contacto from './components//Perfil_usuario/Contacto/Contacto'
import Register_User from './components//Perfil_usuario/Registro/register_user';
import LoginUser from './components//Perfil_usuario/Login/login-user';
import Boleteria from './components/Perfil_usuario/Boleteria/Boleteria';
import Compra_boleta from './components/Perfil_usuario/Boleteria/Compra_boleta';
import Context from './components/Perfil_usuario/Context/Context';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { useContext } from 'react';











function App({inicio = <Home />}) {

  const {usuario} = useContext(Context)

  

  return (
    <>

            
            <Router>
              <div>
                <Switch>

                  <Route exact path='/' > {inicio} </Route>

                  <Route exact path='/eventos' > <Eventos /> </Route>
                  <Route exact path='/contacto' > <Contacto /> </Route>
                  <Route exact path='/loginuser'>  <LoginUser  /></Route>
                  <Route exact path='/registeruser'> <Register_User /> </Route>
                  <Route exact path='/boleteria'> <Boleteria /> </Route>
                  <Route exact path='/compra_boleta'> <Compra_boleta /> </Route>              


                </Switch>
              </div>

            </Router>
          
      </>
  );
}

export default App;
