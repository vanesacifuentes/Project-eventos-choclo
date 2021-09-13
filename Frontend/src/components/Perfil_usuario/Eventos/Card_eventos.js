import React from 'react'
import ImagenMusic from '../assets/music.jpg'
import ImagenCulture from '../assets/cultura.jpg'
import ImagenDeporte from '../assets/deporte.jpg'


import {
    Link
  } from 'react-router-dom'

function Card_eventos(){
    return (
        <>
            <h1 className="text-center pt-5">PRÓXIMOS EVENTOS</h1>
            <h3 className="text mt-5">Explore nuestros servicios y contenido relacionado</h3>
            <hr className="featurette-divider" />


            <div className="row row-cols-1 row-cols-md-12 g-4 mt-3 mb-3">

                
                <div className="col">
                    
                    <div className="card h-100 ">     
                        <img src={ImagenMusic}                        
                        class="card-img-top" alt="musica"/> 

                <div className="col">        
                            <div className="card-body">
                            
                                <h5>
                                    <Link to="/contacto"
                                    className="card-title text-center">CONCIERTO METALLICA
                                    </Link>
                                </h5>
                            
                                <p className="card-text">Texto música</p>
                            </div>
                            
                            <div className="card-footer">
                                <button type= "submit" className= "btn col-5 mx-3 justify-content-center " id="boton1">Ver más...</button>
                               
                            </div>
                    
                    </div> 
                </div>    
                </div>
 
            </div>
        </>
    );
}
export default Card_eventos