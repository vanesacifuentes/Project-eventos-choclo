import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home/Home';
import Eventos from './components/Eventos/Eventos'
import Contacto from './components/Contacto/Contacto'
import Register_User from './components/Registro/register_user';
import LoginUser from './components/Login/login-user';


function App() {
  return (
    <>
            <Router>
              <div>
                <Switch>

                  <Route exact path='/' component={Home}/>
                  <Route exact path='/eventos' component={Eventos}/>
                  <Route exact path='/contacto' component={Contacto}/>
    <              Route exact path='/loginuser' component={LoginUser}/>
                  <Route exact path='/registeruser' component={Register_User}/>

                </Switch>
              </div>

            </Router>,
      </>
  );
}

export default App;
