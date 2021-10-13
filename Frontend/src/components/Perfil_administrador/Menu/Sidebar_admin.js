import React from 'react'
import './Sidebar.css'


import {
    Link
} from 'react-router-dom'


function Sidebar_admin() {
    return (
        <>
            <div className="sidebar">
                <ul>
                    <li className="nav-item dropdown dropend">
                        <Link to="/admin"
                            className="nav-link text-white dropdown-toggle"

                            data-bs-toggle="dropdown"
                            aria-expanded="false">

                            <i className="me-2 fas fa-calendar-week"
                                style={{ color: "#ffff" }}></i>Eventos
                        </Link>

                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <Link to="/ver_evento"
                                    className="dropdown-item" > Ver eventos
                                </Link>
                            </li>

                            <li>
                                <Link to="/crear_evento"
                                    className="dropdown-item" > Crear evento
                                </Link>
                            </li>

                        </ul>
                    </li>

                    <li>
                        <Link to="/informes_admin" className="mx-3 text-white">
                            <i className="me-2 fas fa-chart-bar"
                                style={{ color: "#ffff" }}></i>
                            Informes
                        </Link>
                    </li>

                    <li>
                        <Link to="/usuarios_registrados" className="mx-3 text-white">
                            <i className="me-2 fas fa-users"
                                style={{ color: "#ffff" }}></i>
                            Usuarios
                        </Link>
                    </li>

                    <li>
                        <Link to="/" className="mx-3 text-white">
                            <i className="me-2 fas fa-share-square"
                                style={{ color: "#ffff" }}></i>
                            Cerrar sesión
                        </Link>
                    </li>
                </ul>
            </div >

        </>
    )
} export default Sidebar_admin
