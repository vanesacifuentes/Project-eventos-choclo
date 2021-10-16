import React from 'react'
import ImagenMusic from '../assets/music.jpg'
import ImagenCulture from '../assets/cultura.jpg'
import ImagenDeporte from '../assets/deporte.jpg'
import './Card_inicio.css'

import {
    Link
} from 'react-router-dom'

function Card_inicio() {
    return (
        <>
            <h1 className="text-center">CATEGORÍAS EVENTOS</h1>
            <h2 className="text-center mb-5">¡Los mejores eventos los encuentras aquí!</h2>


            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-5">

                <div className="col">
                    <div className="card h-100 ">
                        <div className="card-header-first rounded">
                            <h5>
                                <Link to="/eventos"
                                    className="card-title1 h2">MÚSICA
                                </Link>
                            </h5>
                            <img src={ImagenMusic}
                                class="card-img-top %" alt="musica" />
                            <div className="card-body">
                                <p className="card-text h4">Los mejores eventos músicales, conciertos, artistas de talla mundial y más...</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <div className="card-header-second rounded">
                            <h5>
                                <Link to="/eventos"
                                    className="card-title1 h2">CULTURA
                                </Link>
                            </h5>
                            <img src={ImagenCulture} class="card-img-top" alt="..." />
                            <div className="card-body">
                                <p className="card-text h4">Conozca los eventos culturales que se presentarán en la ciudad  de Cali esta temporada</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="card h-100">
                        <div className="card-header-third rounded">
                            <h5>
                                <Link to="/eventos"
                                    className="card-title1 h2">DEPORTES
                                </Link>
                            </h5>
                            </div>
                        <img src={ImagenDeporte} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text h4">No te pierdas los mejores eventos deportivos más esperados del 2021</p>
                        </div>
                    
                </div>
                </div>
            
        </div>
        </>
    );
}
export default Card_inicio
