import React from 'react'
//import imagen from info.imagen
import ImagenCulture from '../assets/cultura.jpg'
import ImagenDeporte from '../assets/deporte.jpg'


import {
    Link
} from 'react-router-dom'


function Card_eventos({ info }) {


    return (
        <>
            {console.log('vouy')}
            <div className="card border mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={info.imagen} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h2 className="card-title">{info.nombre_evento}</h2>
                            <p className="card-text h4">Lugar: {info.lugar_evento} </p>
                            <p className="card-text h4">Fecha: {info.fecha_inicio_evento}</p>
                            <p className="card-text h4">Hora: {info.hora_inicio}</p>
                            <p className="card-text h4">Precio: ${info.precio_boleta} COP</p>
                        </div>
                        <Link to="/boleteria">
                            <button type="submit" className="btn col-11 text-center mx-3 mb-3" id="boton1">Ver más...</button>
                        </Link>
                    </div>
                </div>
            </div>


            
        </>
    );
}
export default Card_eventos