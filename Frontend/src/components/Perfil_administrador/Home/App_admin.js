import Navbar_admin from '../Menu/Navbar_admin';
import Sidebar_admin from '../Menu/Sidebar_admin';
import Eventos_admin from '../Eventos_admin/Eventos_admin';
import Crear_evento from '../Eventos_admin/Form_eventos';
import Informes_admin from '../Informes_admin/Informes_admin';
import Usuarios_registrados from '../UsuariosRegistrados/Usuarios_registrados';
import './App.css'


import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';





function App_admin() {

  

  return (
    <>   
            <Router>
            <Switch>
              
            

              <div className= "flex"> 
              
              
              <Navbar_admin/>
                  
              <div className= "content"> 
              
              <Sidebar_admin/>

                  <Route exact={true} path='/admin' component={Eventos_admin}/> 
                  <Route exact={true} path='/ver_evento' component={Eventos_admin}/>
                  <Route exact={true} path='/crear_evento' component={Crear_evento}/>
                  <Route exact={true} path='/informes_admin' component={Informes_admin}/> 
                  <Route exact={true} path='/usuarios_registrados' component={Usuarios_registrados}/> 
                                 
                  </div>  
              </div>
              </Switch>
            </Router>
          
      </>
  );
}

export default App_admin;

