import React, { createContext, useContext } from 'react';
import './Menu.css'

import {
    Link, Redirect
} from 'react-router-dom'
import Context from '../Context/Context';
import LoginUser from '../Login/login-user';


function Menu() {

    function cerrarSesion() {
        
        localStorage.removeItem('usuario')
        window.location = './'
    }

    function iniciarSesion() {
        
        //localStorage.removeItem('usuario')
        window.location = './loginuser'
    }



    const { usuario, userF } = useContext(Context)

    function handleClick(e) {
        alert(e.target.name);
        switch (e.target.name) {
            case 'fin_sesion': cerrarSesion()
                    break;
            case 'inicio_sesion' : iniciarSesion()
                    break;

        }

    }



    return (
        <>
            <nav className="navbar navbar-light navbar-expand-md  fixed-top">
                <div className="col-11 container-fluid ">

                    <a className="navbar-brand h1 mr-5 text-white" href="/">Eventos Choclo</a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#menu-principal"
                        aria-controls="menu-principal" aria-expanded="false" aria-label="Desplegar menú de navegación">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="menu-principal">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/"
                                    className="nav-link mx-3 text-white" aria-current="page">Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/eventos"
                                    className="nav-link mx-3 text-white" >Eventos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto"
                                    className="nav-link mx-3 text-white" >Contactenos
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ml-3 mr-5 text-white"
                                    id="navbarDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {usuario ? usuario.nombre_usuario : 'Login'}
                                </a>



                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link
                                            to={``}
                                            onClick={(e) => handleClick(e)}
                                            name={usuario ? 'fin_sesion' : 'inicio_sesion'}
                                            className="dropdown-item" >{usuario ? 'Cerrar sesión' : "Iniciar sesión"}
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/registeruser"
                                            className="dropdown-item" >{usuario ? '' : "Registrarme"}
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    );
}
export default Menu;
