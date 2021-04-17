import React from 'react';
import Menu from '../Menu/Menu';


function Register_User(){

    function crearUsuario(e){
        const name = e.target.name
        alert(name)
    }

    function handleSubmit(){

        return(
            alert('submit')    
        )
    }

    function handleChange(){

        return(
            console.log('change')    
        )
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
                                            name= "nombre-usuario"
                                            type="text" 
                                            className = ""
                                            placeholder="Nombre completo" 
                                            onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className = "mb-3 invalid-feedback">Ingrese el nombre de usuario</div>
                                    </div>

                                    <div id= "#cedula-group" className= "form-group">
                                        <label>Cédula</label>
                                
                                        <input 
                                            id= "cedula" 
                                            name= "cedula"
                                            type="number" 
                                            className = ""
                                            placeholder="Cédula" 
                                            onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                    <div className = "mb-3 invalid-feedback">Ingrese el número de cédula</div>
                                    </div>

                                    <div id= "#correo-group" className= "form-group">
                                        <label>Correo electrónico</label>
                                
                                        <input 
                                            id= "correo" 
                                            name= "correo"
                                            type="email" 
                                            className = ""
                                            placeholder="Correo electrónico" 
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
                                            className = ""
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
                                            className = ""
                                            placeholder="Contraseña" 
                                            onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                    <div className = "mb-3 invalid-feedback">Ingrese la contrasena</div>
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