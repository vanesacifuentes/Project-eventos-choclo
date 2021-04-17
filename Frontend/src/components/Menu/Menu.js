import React from 'react';
//import img from '.Menu/logo2.jpg'
//<img src={imagen} style={{width : 100}}/>



import {
    Link
  } from 'react-router-dom'


function Menu() {

    return (
        <>
            <nav className="navbar navbar-light navbar-expand-md  bg-warning  fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand h1" href="#">Eventos Choclo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu-principal" 
                    aria-controls="menu-principal" aria-expanded="false" aria-label="Desplegar menú de navegación">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-end" id="menu-principal">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/"
                                className="nav-link mx-3 " aria-current="page">Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/eventos"
                                 className="nav-link mx-3" >Eventos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contacto"
                                 className="nav-link mx-3" >Contactenos
                                 </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle ml-3 mr-5" 
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
