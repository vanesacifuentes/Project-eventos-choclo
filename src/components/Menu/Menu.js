import React from 'react';
//import imagen from '.../assets/img/img1.jpg'



function Menu() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
                <div className="container-fluid d-flex justify-content-end">

                

                    <a className="navbar-brand" href="#">Eventos Choclo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Eventos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contactenos</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Login
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Iniciar Sesión</a></li>
                                    <li><a className="dropdown-item" href="#">Registrarme</a></li>

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
