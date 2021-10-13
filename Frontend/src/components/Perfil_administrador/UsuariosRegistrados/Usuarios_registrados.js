import React from 'react'
import './Usuarios_registrados.css'



function Usuarios_registrados() {

      //Temporalmente seria un objeto json 
      const eventos = [

        {
            id_usuario: "1",
            cedula_usuario: "11445000",
            nombre_usuario: "ALEJANDRA MARTINEZ",
            email_usuario: "alejandramar@correo.com",
            username: "alemar",
        },
        {
            id_usuario: "2",
            cedula_usuario: "1133600",
            nombre_usuario: "VANESA ROSS",
            email_usuario: "vanesa@correo.com",
            username: "vaneross",

        }]

    /////////////////
    const renderUsuarios = (usuario, index) => {
        return (


            <tr key={index}>
                <td>{usuario.id_usuario}</td>
                <td>{usuario.cedula_usuario}</td>
                <td>{usuario.nombre_usuario}</td>
                <td>{usuario.email_usuario}</td>
                <td>{usuario.username}</td>
                <td>
                    <button  className="btn-primary rounded mx-2" id="button_edit"
                    data-bs-toggle="modal">
                        <i className="mx-2 fas fa-edit"
                        ></i>
                    </button>
                    <button  className="btn-danger rounded mx-2" id="button_delete"
                    data-bs-toggle="modal">
                        <i className="mx-2 fas fa-minus-circle"
                        ></i>
                    </button>
                </td>
            </tr>
        )
    }

    return (
        <>
           <div className="container ">

           <br></br>

                <div className="rounded p-3 mb-5 text-white" id="usuarios">
                    <h1>USUARIOS REGISTRADOS</h1>
                    
                </div>

                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cedula usuario</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Username</th>
                            <th scope="col">Funciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {eventos.map(renderUsuarios)}

                    </tbody>
                </table>
            </div>

        </>
    )
} export default Usuarios_registrados
