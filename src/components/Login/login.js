import React, { useState } from 'react';
import Menu from '../Menu/Menu';


function Login(){


    function registro(){

        return(

            alert('ananana')

            
        )

    }

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(name, value){
        if(name === "usuario"){
            setUser(value)
        }else {
            setPassword(value)
        }
    };

    console.log("usuario: ", user);
    console.log("contraseña:", password)

    function handleSubmit(){
        let account = { user, password }
        if(account){
            console.log("account:", account)
        }
    };


    return(
        <>

        <Menu/>
            <div className="container d-flex justify-content-center align-items-center mb-5" >
               <div className="row justify-content-center align-items-center mt-5 pt-3 col-6 "  >

                    <h3 className="mb-3">Bienvenido,</h3>
                    <h4 className="mb-3">Por favor autentíquese para ingresar</h4>
                    <i className="fas fa-users fa-6x d-flex justify-content-center" 
                    style={{color: "#ffc107"}}></i>
                     
                        <form >
                            <div className= "form-group mt-3">
                                <label>Usuario</label>
                                    <input 
                                        id= "usuario" 
                                        name= "usuario"
                                        type="text" 
                                        className="form-control mt-3 mb-3 " 
                                        placeholder="Usuario" mx="5"
                                        onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                    </input>
                             </div>

                            <div className= "form-group">
                                <label>Contraseña</label>
                                    <input 
                                        id="password"
                                        name="password"
                                        type="password" 
                                        className="form-control mt-3 mb-3" 
                                        placeholder="Contraseña"
                                        onChange= {(e) => handleChange(e.target.name, e.target.value)}>
                                    </input>
                            </div>

                                <h6 className=" mb-3" >¿Olvidó su contraseña?</h6>
  
                        </form >

                        <div className="row justify-content-center align-items-center ">

                            <button onClick={()=>{handleSubmit()}} type="button" 
                                    className="btn btn-success col-3 mx-3" >Ingresar</button>

                            <button onClick={()=>{registro()}} type="button" 
                                className="btn btn-success col-4" >Registrarse</button>
                        </div>
                </div>
            </div>
        </>
    );
}
export default Login;