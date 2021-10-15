import React, { useState } from 'react';
import './register_user.css'

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


    ////////////////////////777


    async function crearUsuario() {
        var datos = {
            cedula_usuario : license,
            nombre_usuario : name,
            email_usuario : email,
            username : userName,
            contrasena : password,
            estado : true
        }

        const response = await fetch('http://localhost:5000/registro', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        if(response.ok){
            localStorage.setItem('usuario', JSON.stringify(datos))
            window.location = '/'
        }
    }



    function validarCampos() {
        let validador = true

        if (name === '') {
            setValidName('is-invalid')
            validador = false
        }
        if (license === '') {
            setValidLicense('is-invalid')
            validador = false
        }
        if (email === '') {
            setValidEmail('is-invalid')
            validador = false
        }
        if (userName === '') {
            setValidUserName('is-invalid')
            validador = false
        }
        if (password === '') {
            setValidPass('is-invalid')
            validador = false
        }

        return validador
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (validarCampos()) {
            crearUsuario()
        }


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
                        <h1>Inicio</h1>

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
                                            className={validName}
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
                                            className={validLicense}
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
                                            className={validEmail} placeholder="Correo electrónico"
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
                                            className={validUserName}
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
                                            className={validPass}
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
                                            className=" btn col-4" id="boton2">Cancelar</button>

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