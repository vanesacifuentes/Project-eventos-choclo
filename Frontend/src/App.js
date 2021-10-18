import Home from './components//Perfil_usuario/Home/Home';
import Eventos from './components//Perfil_usuario/Eventos/Eventos'
import Contacto from './components//Perfil_usuario/Contacto/Contacto'
import Register_User from './components//Perfil_usuario/Registro/register_user';
import LoginUser from './components//Perfil_usuario/Login/login-user';
import Boleteria from './components/Perfil_usuario/Boleteria/Boleteria';
import Compra_boleta from './components/Perfil_usuario/Boleteria/Compra_boleta';




import Navbar_admin from './components/Perfil_administrador/Menu/Navbar_admin';
import Sidebar_admin from './components/Perfil_administrador/Menu/Sidebar_admin';
import Eventos_admin from './components/Perfil_administrador/Eventos_admin/Eventos_admin';
import Crear_evento from './components/Perfil_administrador/Eventos_admin/Form_eventos';
import Informes_admin from './components/Perfil_administrador/Informes_admin/Informes_admin';
import Usuarios_registrados from './components/Perfil_administrador/UsuariosRegistrados/Usuarios_registrados';



import React, { useContext } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';




import Context from './components/Perfil_usuario/Context/Context';











function App({ inicio = <Home /> }) {


  
  const { estadoApp } = useContext(Context);

  return (
    <>

      {estadoApp === 'user' ?
      <Router>
        
          <Switch>

            <Route exact path='/' > {inicio} </Route>
            <Route exact path='/eventos' > <Eventos /> </Route>
            <Route exact path='/contacto' > <Contacto /> </Route>
            <Route exact path='/loginuser'>  <LoginUser /></Route>
            <Route exact path='/registeruser'> <Register_User /> </Route>
            <Route exact path='/boleteria'> <Boleteria /> </Route>
            <Route exact path='/compra_boleta'> <Compra_boleta /> </Route>
          </Switch>

      </Router>     :



      <Router>
        <Switch>
          <div className="flex">


            <Navbar_admin />

            <div className="content">

              <Sidebar_admin />

              <Route exact={true} path='/admin' component={Eventos_admin} />
              <Route exact={true} path='/ver_evento' component={Eventos_admin} />
              <Route exact={true} path='/crear_evento' component={Crear_evento} />
              <Route exact={true} path='/informes_admin' component={Informes_admin} />
              <Route exact={true} path='/usuarios_registrados' component={Usuarios_registrados} />

            </div>
          </div>
        </Switch>
      </Router>
      }
    
    </>
    

  );

}

export default App;
