import React, { useState } from 'react'
import Modal_eventos from './Modal_eventos'
import './Eventos_admin.css'
import Form_eventos from './Form_eventos';
import './Modal.css'



function Eventos_admin() {

    ///State
    const [stateModal, setModal] = useState(false);

    const handleOpenModal = () => { setModal(!stateModal) };
    const handleCloseModal = () => setModal(false);


    //Temporalmente seria un objeto json 
    const eventos = [

        {
            id_evento: "1",
            categoria_evento: "MUSICA",
            nombre_evento: "CONCIERTO COLDPLAY",
            lugar_evento: "Estadio Olimpico Pascual Guerrero",
            fecha_inicio_evento: "2021/12/28",
            fecha_fin_evento: "2021/05/31",
            hora_inicio: "10:00 PM",
            aforo: "400",
            precio_boleta: "150000",
            descripcion_eveto: "Colplay es una banda británica de pop rock y tock alternativo formada en Londres en 1996. Está integrada por Chris Martin, Jon Buckland, Guy Berryman y Will Champion. Es uno de los grupos más relevantes de las décadas de los 2000 y principios de 2010",

        },
        {
            id_evento: "2",
            categoria_evento: "MUSICA",
            nombre_evento: "CONCIERTO METALLICA",
            lugar_evento: "Estadio Olimpico Pascual Guerrero",
            fecha_inicio_evento: "2021/12/28",
            fecha_fin_evento: "2021/05/31",
            hora_inicio: "10:00 PM",
            aforo: "400",
            precio_boleta: "150000",
            descripcion_eveto: "descripcion Metallica",

        }]

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

                    <button onClick={handleOpenModal} type="button" className="btn-primary rounded mx-2" data-bs-toggle="modal" data-bs-target="#modalEvento">
                        <i className="fas fa-edit"
                        ></i>
                    </button>

                    <button onClick={() => alert("¿Desea borrar el evento?")} className="btn-danger rounded" id="button_delete">
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

                <Modal_eventos stateModal={stateModal} handleOpenModal={handleOpenModal}/> 

               

            </div>


        </>
    );
}
export default Eventos_admin

