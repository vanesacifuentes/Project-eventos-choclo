import React from 'react'
import imagenMusic from '../assets/coldplay.jpg'
import imagenMusic2 from '../assets/metallica.jpg'



import {
    Link
} from 'react-router-dom'

function Card_eventos2() {
    return (
        <>
            <h1 className="pt-5">PRÓXIMOS EVENTOS</h1>
            <h3 className="text mt-5">Explore nuestros servicios y contenido relacionado</h3>
            <hr className="featurette-divider" />


                    <div className="card border-dark mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={imagenMusic} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">CONCIERTO COLDPLAY</h2>
                                    <p className="card-text h4">Lugar: Estadio Olímpico Pascual Guerrero </p>
                                    <p className="card-text h4">Fecha: 10-Diciembre-2021</p>
                                    <p className="card-text h4">Hora: 10:00pm </p>
                                    <p className="card-text h4">Precio: $150.000 COP</p>
                                </div>
                                <Link to="/boleteria">
                               <button type="submit"className="btn col-11 text-center mx-3" id="boton1">Ver más...</button>  
                               </Link> 
                            </div>
                        </div>
                    </div>

                    
                    <div className="card border-dark mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={imagenMusic2} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">CONCIERTO METALLICA</h2>
                                    <p className="card-text h4">Lugar: Estadio Olímpico Pascual Guerrero </p>
                                    <p className="card-text h4">Fecha: 10-Diciembre-2021</p>
                                    <p className="card-text h4">Hora: 10:00pm </p>
                                    <p className="card-text h4">Precio: $150.000 COP</p>
                                </div>
                               <button type="submit"className="btn col-11 col-5 text-center mx-3" id="boton1">Ver más...</button>    
                            </div>
                        </div>
                    </div>

        </>
    );
}
export default Card_eventos2