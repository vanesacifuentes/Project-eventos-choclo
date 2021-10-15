import React, { useState, useEffect } from 'react'
import Modal_eventos from './Modal_eventos'
import './Eventos_admin.css'
import Form_eventos from './Form_eventos';
import './Modal.css'



function Eventos_admin() {

    ///State
    const [stateModal, setModal] = useState(false);
    const [eventos, setStateEvents] = useState([])

    useEffect(async () => {
        await arrayEvents()
    }, [])






    function handleOpenModal() {
        setModal(!stateModal)
    };


    //const handleCloseModal = () => setModal(false);






    const arrayEvents = async () => {
        //llena el array de eventos con los datos provenientes de la BD
        try {
            const response = await fetch('http://localhost:5000/eventos')
            const arrayEventos = await response.json()
            const dataEventos = JSON.parse(arrayEventos)
            //moveImage(dataEventos)
            setStateEvents(...eventos, dataEventos)

        } catch { alert('array') }
    }



    async function eliminarRegistro(id) {


        const result = window.confirm("¿Desea borrar el evento?")
        if (result) {
            try {

                const response = await fetch(`http://localhost:5000/eventos/${id}`, {
                    method: 'DELETE'
                })

                const arrayEventos = await response.json()
                const dataEventos = JSON.parse(arrayEventos)  
                setStateEvents(dataEventos)
                

                

            } catch { alert('execpcion') }

        }

    }




    /////////////////
    const renderEventos = (evento, index) => {
        return (


            <tr key={index}>
                <td>{evento.id_evento}</td>
                <td>{evento.categoria_evento}</td>
                <td>{evento.nombre_evento}</td>
                <td>{evento.lugar_evento}</td>
                <td>{evento.fecha_inicio_evento}</td>
                <td>{evento.fecha_fin_evento}</td>
                <td>{evento.hora_inicio}</td>
                <td>{evento.aforo}</td>
                <td>{new Intl.NumberFormat("en-EN").format(evento.precio_boleta)}</td>

                <td>

                    <button onClick={(e) => { }} type="button" className="btn-primary rounded mx-2" data-bs-toggle="modal" data-bs-target="#modalEvento">
                        <i className="fas fa-edit"
                        ></i>
                    </button>

                    <button onClick={() => eliminarRegistro(evento.id_evento)}
                        className="btn-danger rounded"
                        id="button_delete"
                        name='btn_eliminar'>

                        <i className=" fas fa-trash-alt"
                        ></i>
                    </button>

                </td>
            </tr>
        )
    }


    return (
        <>

            <div className="container">

                <br></br>

                <div className="rounded p-3 mb-5 text-white" id="ver_eventos">
                    <h1 >VER EVENTOS</h1>
                </div>

                <div className="input-group mb-5">
                    <h3 className="p-2">Buscar evento</h3>
                    <input type="text" className="form-control" placeholder="Buscar evento" />
                    <button className="btn" type="submit">Buscar</button>
                </div>

                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Categoria evento</th>
                            <th scope="col">Nombre evento</th>
                            <th scope="col">Lugar</th>
                            <th scope="col">Fecha inicio</th>
                            <th scope="col">Fecha fin</th>
                            <th scope="col">Hora</th>
                            <th scope="col">Aforo</th>
                            <th scope="col">Precio Boleta</th>
                            <th scope="col">Funciones</th>

                        </tr>
                    </thead>
                    <tbody>
                        {eventos.map(renderEventos)}

                    </tbody>
                </table>

                <Modal_eventos stateModal={stateModal} handleOpenModal={handleOpenModal} />



            </div>


        </>
    );
}
export default Eventos_admin

