
import React, { useState } from 'react';
import Menu from '../Menu/Menu';


function Register_User(){



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





    /*function crearUsuario(){
        var datos =  {         
            name,
            license,
            email,
            userName,
            password
        }

        try {
            const response = await fetch('http://localhost:5000/registro',{
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                    'Content-Type': 'application/json'
                }

            });

            const data = await response.json();
            window.location.href= "./"   
            
        } catch (error) {
            alert("Ingreso no permitido")
        }
    }*/

    function validarCampos(){
        let validador = true
        if(name ===''){  
            setValidName('is-invalid')
            validador = false
        }else{
            if(license ===''){  
                setValidLicense('is-invalid')
                validador = false
            }else{
                if(email ===''){  
                    setValidEmail('is-invalid')
                    validador = false
                }else{
                    if(userName ===''){  
                        setValidUserName('is-invalid')
                        validador = false
                    }else{
                        if(password ===''){  
                            setValidPass('is-invalid')
                            validador = false
                        }
                    }
                }
            }
        }
        return validador
    }

    function handleSubmit(e){
        e.preventDefault()
        if(validarCampos){
           // crearUsuario(e)

            
        }

        
    }



    function handleChange(targetName, targetValue){
        if(targetName === "name"){
            setName(targetValue) 
        }else {
            if(targetName === "license"){
                setLicense(targetValue) 
            }else{
                if(targetName === "email"){
                    setEmail(targetValue)
                }else{
                    if(targetName === "username"){
                        setUserName(targetValue)
                    }else{
                        if(targetName === "password"){
                            setPassword(targetValue)
                        }
                    }
                }
            }    
        }    
    }

    return(
        <>
        <Menu/>
            <div className="container-fluid ">
                <div className= "modal-dialog text-center">
                    <div className="col-sm-12 main-section">
                        <div className="modal-content bg-warning">
                            <div className="col-12 user-img">
                            <h3 className="mt-3">Crear una cuenta</h3>
                            <h6 className="mt-3 align-items-start">Por favor ingrese sus datos personales para el registro</h6>
                                
                                <form onSubmit= {handleSubmit}>

                                    <div id= "#user-group" className= "form-group">
                                        <label>Nombre y apellido</label>
                                
                                        <input 
                                            id= "nombre-usuario" 
                                            name= "name"
                                            type="text" 
                                            className = {validName}
                                            placeholder="Nombre completo" 
                                            onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className = "mb-3 invalid-feedback">Ingrese el nombre de usuario</div>
                                    </div>

                                    <div id= "#cedula-group" className= "form-group">
                                        <label>Cédula</label>
                                
                                        <input 
                                            id= "cedula" 
                                            name= "license"
                                            type="number" 
                                            className = {validLicense}
                                            placeholder="Cédula" 
                                            onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                    <div className = "mb-3 invalid-feedback">Ingrese el número de cédula</div>
                                    </div>

                                    <div id= "#correo-group" className= "form-group">
                                        <label>Correo electrónico</label>
                                
                                        <input 
                                            id= "correo" 
                                            name= "email"
                                            type="email" 
                                            className = {validEmail}                                            placeholder="Correo electrónico" 
                                            onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                    <div className = "mb-3 invalid-feedback">Ingrese el correo electrónico</div>
                                    </div>

                                    <div id= "#username-group" className= "form-group">
                                        <label>Nombre de usuario</label>
                                
                                        <input 
                                            id= "username" 
                                            name= "username"
                                            type="text" 
                                            className = {validUserName}
                                            placeholder="Username" 
                                            onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className = "mb-3 invalid-feedback">Ingrese username</div>
                                    </div>

                                    <div id= "#cedula-group" className= "form-group">
                                        <label>Contraseña</label>
                                
                                        <input 
                                            id= "password" 
                                            name= "password"
                                            type="password" 
                                            className = {validPass}
                                            placeholder="Contraseña" 
                                            onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                    <div className = "mb-3 invalid-feedback">Ingrese la contrasena</div>
                                    </div>

                                    <div className="row justify-content-center align-items-center ">

                                        <button  type="submit" 
                                        className="btn btn-success col-3 mx-3" id="boton1">
                                        Registrarse</button>

                                        <button onClick={()=>{}} type="button" 
                                        className="btn btn-success col-4" id="boton2">Cancelar</button>
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