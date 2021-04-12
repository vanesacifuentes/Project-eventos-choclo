import React from 'react';


function Registro_Usuario(){

    function crearUsuario(e){
        const name = e.target.name
        alert(name)
    }


    return(
        <>
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row justify-content-center align-items-center mt-4 pt-5 col-6">
                
                    <h3 className="mb-3">Crear una cuenta</h3>
                    <h4 className="mb-5">Por favor ingrese sus datos personales para el registro</h4>

                <form>
                    <div className="form-group">
                        <label>Nombre y apellido</label>
                        <input  name='nombre' type="text" className="is-invalid form-control mt-3 mb-3" placeholder="Nombre Completo"></input>
                        <div className='mb-3 invalid-feedback'>Campo Obligatorio</div>
                    </div>

                    <div className="form-group">
                        <label>Cédula</label>
                        <input name='cedula' type="number" className="form-control mt-3 mb-3" placeholder="Cédula"></input>
                    </div>

                    <div className="form-group">
                        <label>Correo electrónico</label>
                        <input name='correo' type="email" className="form-control mt-3 mb-3" placeholder="Correo electrónico"></input>
                    </div>

                    <div className="form-group">
                        <label>Contraseña</label>
                        <input name='pass' type="password" className="form-control mt-3 mb-5" placeholder="Contraseña"></input>
                    </div>

                </form>

                <div className="row justify-content-center align-items-center mx-5">
                <button name='btn' onClick={crearUsuario} type="submit" className="btn btn-success col-2">Acceder</button>
                </div>

                </div>
            </div>


        </>
    );

}

export default Registro_Usuario;