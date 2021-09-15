import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/footer";
import imagenMusic from '../assets/coldplay.jpg'

import {
    Link
} from 'react-router-dom'

function Compra_boleta(){

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