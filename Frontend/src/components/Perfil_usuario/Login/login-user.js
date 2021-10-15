import React, { useContext, useState } from 'react';
import "./login-user.css"


import {
    Link, useHistory
} from 'react-router-dom'
import Context from '../Context/Context';



//Uso de hook useState
function LoginUser() {
    const history = useHistory();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    const [validPass, setValidPass] = useState('');
    const [validUser, setValidUser] = useState('');

    const { usuario, userF } = useContext(Context);



    function registro() {

        window.location.href = "./registeruser"
    }

    ///////////////////////////////////////////////////////////
    function handleChange(name, value) {
        if (name === "usuario") {
            console.log(value)
            setUser(value)
        } else {
            if (name === "password") {
                setPassword(value)
            }
        }
    };


    //////////////////////////////////////////////////////////
    function validarCampos() {

        let validador = true
        if (user === '') {
            setValidUser('is-invalid')
            validador = false
        }else setValidUser('')
        
        if (password === '') {
            setValidPass('is-invalid')
            validador = false
        }else setValidPass('')

        return validador
    }



    ///////////////////////////////////////////////////////////////////////////
    function handleSubmit(e) {
        e.preventDefault()
        if (validarCampos()) {
            consultUser()
        }

    }







    ////////////////////////////////////////////////////////////
    async function consultUser() {

        var datos = {
            username: user,
            pass: password
        }

        try {

            const response = await fetch('http://localhost:5000', {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if (await userF(await response.json())) {
                window.location = '/'
            } else {
                alert('usuario o contraseña invalidos')
            }
        }catch{alert('No se encontro servidor de base de datos')}

    }







    
/////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>

            <div className="container-fluid ">
                

            <div className=" d-flex justify-content-center align-items-center ">
                    <Link to="/">
                        <h1>Inicio</h1>
                    </Link>
                </div>

                <div className="modal-dialog text-center mt-1">
                    <div className="col-sm-9 main-section">
                        <div className="modal-content">
                            <div className="col-12 user-img">
                                <i className="mt-2 fas fa-users fa-6x"
                                    style={{ color: "#ffff" }}></i>
                                <h3 className="h3 mb-2">¡Bienvenido!</h3>
                                <h6 className="h6 mb-3 align-items-start">Por favor autentíquese para ingresar</h6>

                                <form onSubmit={handleSubmit}>
                                    <div id="#user-group" className="form-group ">
                                        <label>Usuario</label>

                                        <input
                                            id="usuario"
                                            name="usuario" 
                                            type="text"
                                            className={validUser}
                                            placeholder="Usuario"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className="h5 mb-2 invalid-feedback">Ingrese el usuario</div>
                                    </div>

                                    <div id="contrasena-group" className="form-group">
                                        <label>Contraseña</label>

                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            className={validPass}
                                            placeholder="Contraseña"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>

                                        <div className="h5 mb-2 invalid-feedback">Ingrese la contraseña</div>
                                    </div>


                                    <div className="row justify-content-center align-items-center mt-3 mb-3">



                                        <button type="submit"
                                            className="btn col-3 mx-3" id="boton1">
                                            Ingresar</button>


                                        <button onClick={() => { registro() }} type="button"
                                            className="btn col-4" id="boton2">Registrarse</button>


                                    </div>

                                    <h6 className=" h6 " >¿Olvidó su contraseña?</h6>

                                </form >
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default LoginUser