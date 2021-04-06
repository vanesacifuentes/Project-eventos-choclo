import React from 'react';
import HeaderEventos from './header_eventos'


function Login(){

    return(

        <>
            <HeaderEventos/>
            <div className="container d-flex justify-content-center align-items-center mb-5" >
               <div className="row justify-content-center align-items-center mt-4 pt-5 col-6 "  >

                    <h3 className="mb-4">Bienvenido,</h3>
                    <h4 className="mb-5">Por favor autentíquese para ingresar</h4>
                    <i className="fas fa-user fa-6x d-flex justify-content-center"></i>
                     
                        <form >
                             <div className= "form-group mt-5">
                                <label>Usuario</label>
                                <input type="text" className="form-control mt-3 mb-3 " placeholder="Usuario" mx="5"></input>
                             </div>

                            <div className= "form-group">
                                <label>Contraseña</label>
                                <input type="password" className="form-control mt-3 mb-3" placeholder="Contraseña"></input>
                            </div>

                                <h6 className=" mb-5" >¿Olvidó su contraseña?</h6>
  
                        </form >

                        <div className="row justify-content-center align-items-center ">

                            <button type="button" className="btn btn-success col-2 mx-3" onClick>Ingresar</button>
                            <button type="button" className="btn btn-success col-3  ">Registrarse</button>
                        </div>

                </div>

            </div>

            <HeaderEventos/>
            
        </>
        
    );

}
export default Login;