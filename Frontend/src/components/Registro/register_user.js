import React, { useState } from 'react';
import './register_user.css'
import Imagen from '../assets/logo ECH.png'

import {
    Link
} from 'react-router-dom'


function Register_User() {

    const [name, setName] = useState('');
    const [license, setLicense] = useState('');
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const [validName, setValidName] = useState('');
    const [validLicense, setValidLicense] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPass, setValidPass] = useState('');
    const [validUserName, setValidUserName] = useState('');





    function crearUsuario(e) {
        const name = e.target.name
        alert(name)
    }

    function handleSubmit(e) {
        e.preventDefault()

    }

    function handleChange(targetName, targetValue) {
        if (targetName === "name") {
            setName(targetValue)
        } else {
            if (targetName === "license") {
                setLicense(targetValue)
            } else {
                if (targetName === "email") {
                    setEmail(targetValue)
                } else {
                    if (targetName === "username") {
                        setUserName(targetValue)
                    } else {
                        if (targetName === "password") {
                            setPassword(targetValue)
                        }
                    }
                }
            }
        }
    }

    return (
        <>
       
            <div className="container-fluid ">

                <div className=" d-flex justify-content-center align-items-center ">
                    <Link to="/">
                        <img className='img mb-1' src={Imagen} />

                    </Link>
                </div>

                <div className="modal-dialog text-center mt-1 ">
                    <div className="col-sm-12 main-section">
                        <div className="modal-content">
                            <div className="col-12 user-img">
                                <h3 className="h3 mt-3">Crear una cuenta</h3>
                                <h6 className=" h6 mt-3 align-items-start">
                                    Por favor ingrese sus datos personales para el registro</h6>

                                <form onSubmit={handleSubmit}>

                                    <div id="#user-group" className="form-group">
                                        <label>Nombre y apellido</label>

                                        <input
                                            id="nombre-usuario"
                                            name="name"
                                            type="text"
                                            className=""
                                            placeholder="Nombre completo"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className="mb-3 invalid-feedback">Ingrese el nombre de usuario</div>
                                    </div>

                                    <div id="#cedula-group" className="form-group">
                                        <label>Cédula</label>

                                        <input
                                            id="cedula"
                                            name="license"
                                            type="number"
                                            className=""
                                            placeholder="Cédula"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className="mb-3 invalid-feedback">Ingrese el número de cédula</div>
                                    </div>

                                    <div id="#correo-group" className="form-group">
                                        <label>Correo electrónico</label>

                                        <input
                                            id="correo"
                                            name="email"
                                            type="email"
                                            className=""
                                            placeholder="Correo electrónico"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className="mb-3 invalid-feedback">Ingrese el correo electrónico</div>
                                    </div>

                                    <div id="#username-group" className="form-group">
                                        <label>Nombre de usuario</label>

                                        <input
                                            id="username"
                                            name="username"
                                            type="text"
                                            className=""
                                            placeholder="Username"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className="mb-3 invalid-feedback">Ingrese username</div>
                                    </div>

                                    <div id="#cedula-group" className="form-group">
                                        <label>Contraseña</label>

                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className=""
                                            placeholder="Contraseña"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className="mb-3 invalid-feedback">Ingrese la contrasena</div>
                                    </div>

                                    <div className="row justify-content-center align-items-center mt-3">

                                        <button type="submit"
                                            className="btn col-3 mx-3" id="boton1">
                                            Registrarme</button>

                                        <button onClick={() => { }} type="button"
                                            className="btn col-4" id="boton2">Cancelar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Register_User;