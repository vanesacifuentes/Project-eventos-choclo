import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/footer";
import imagenMusic from '../assets/coldplay.jpg'
import './Compra_boleta.css'

import {
    Link
} from 'react-router-dom'

function Compra_boleta(){

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

        }
    ]

    return(

        <>
            <Menu />

            <div className="container pt-5">

            <h1 className="pt-5">INFORMACIÓN DE TU COMPRA</h1>
            <hr className="featurette-divider" />


                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h2 className="card-title">CONCIERTO COLDPLAY</h2>
                                    <br/>

                                    <i className=" mt-2 fas fa-map-marker-alt fa-4x"
                                    style={{ color: "#00000" }}> <p className="card-text h5">Estadio Olimpico Pascual Guerrero</p> </i>
                                    <br/>
                                    <i className=" mt-2 fas fa-calendar-check fa-4x"
                                    style={{ color: "#00000"  }}> <p className="card-text h5">Viernes 10 de diciembre</p> </i>

                                    <br/>

                                    <i className="mt-2 fas fa-clock fa-4x"
                                    style={{ color: "#00000" }}> <p className="card-text h5">10:00 pm</p> </i>
                                    <br/>
                                    <i className="mt-2 fas fa-dollar-sign fa-4x"
                                    style={{ color: "#00000" }}> <p className="card-text h5">$150.000</p> </i>
                                    
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img src={imagenMusic} className="img-fluid rounded-start" alt="..."/>
                            </div>
                        </div>
                        <div className= "row g-0">

                            
                           
                            <p className= "h1">Formulario y tabla para compra</p>
                            <p>Pruebas</p>

                        </div>
                    </div>

                      
            
            </div>


            <Footer/>

        </>

    );
        

    
}export default Compra_boleta