import React from 'react';
import './Menu.css'

import {
    Link
  } from 'react-router-dom'


function Menu() {

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
                                    Login
                                </a>

                                

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link to="/loginuser"
                                        className="dropdown-item" >Iniciar Sesión
                                        </Link>
                                        </li>
                                    <li>
                                        <Link to="/registeruser"
                                        className="dropdown-item" >Registrarme
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
