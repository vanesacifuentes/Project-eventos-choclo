import React, { useContext } from 'react'
//import imagen from info.imagen
import ImagenCulture from '../assets/cultura.jpg'
import ImagenDeporte from '../assets/deporte.jpg'

import Context from './../Context/Context'


import {
    Link
} from 'react-router-dom'


function Card_eventos({ propEvento }) {

    const {evento,setearEvento} = useContext(Context)




    return (
        <>
            {console.log('vouy')}
            <div className="card border mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={propEvento.imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{propEvento.nombre_evento}</h2>
                            <p className="card-text h4">Lugar: {propEvento.lugar_evento} </p>
                            <p className="card-text h4">Fecha: {propEvento.fecha_inicio_evento}</p>
                            <p className="card-text h4">Hora: {propEvento.hora_inicio}</p>
                           
                        </div>
                        <Link to="/boleteria">
                            <button
                                onClick={()=> setearEvento(propEvento)}
                                className="btn col-11 text-center mx-3 mb-3"
                                id="boton1">Ver más...
                            </button>
                        </Link>
                    </div>
                </div>
            </div>



        </>
    );
}
export default Card_eventos