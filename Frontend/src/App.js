import Home from './components//Perfil_usuario/Home/Home';
import Eventos from './components//Perfil_usuario/Eventos/Eventos'
import Contacto from './components//Perfil_usuario/Contacto/Contacto'
import Register_User from './components//Perfil_usuario/Registro/register_user';
import LoginUser from './components//Perfil_usuario/Login/login-user';
import Boleteria from './components/Perfil_usuario/Boleteria/Boleteria';
import Compra_boleta from './components/Perfil_usuario/Boleteria/Compra_boleta';
import Menu_admin from './components/Perfil_administrador/Menu/Menu_admin.js'



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';





function App({inicio = <Home />}) {

  

  return (
    <>

            
            <Router>
              <div>
                <Switch>

                  <Route exact path='/' > {inicio} </Route>
                  <Route exact path='/eventos' component={Eventos}/>
                  <Route exact path='/contacto' component={Contacto}/>
                  <Route exact path='/loginuser'> <LoginUser  /> </Route>
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
