import React, { createContext, useContext } from 'react';
import './Menu.css'

import {
    Link
  } from 'react-router-dom'
import Context from '../Context/Context';


function Menu() {


    const { usuario, userF } = useContext(Context)

    function handleClick(e){
        switch(e.target.name){
            case 'inicio_fin_sesion'  : usuario.setUser({});


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
                                   {usuario.nombre_usuario ? 'logout' : 'login' } 
                                </a>

                                

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link onClick={()=>{}} to={"/loginuser"}
                                        name='inicio_fin_sesion' className="dropdown-item" >{usuario.nombre_usuario ? 'Cerrar sesiòn' : "Iniciar sesión"}
                                        </Link>
                                        </li>
                                    <li>
                                        <Link to="/registeruser"
                                        className="dropdown-item" >{usuario.nombre_usuario ? '' : "Registrarme"}
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
