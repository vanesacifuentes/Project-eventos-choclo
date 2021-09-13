import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/footer";
import imagenMusic from '../assets/coldplay.jpg'

import {
    Link
} from 'react-router-dom'

function Boleteria(){

    return(

        <>
            <Menu />

            <div className="container pt-5">

            <h1 className="pt-5">INFORMACIÓN DEL EVENTO</h1>
            <hr className="featurette-divider" />


                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={imagenMusic} className="img-fluid rounded-start" alt="..."/>
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h2 className="card-title">CONCIERTO COLDPLAY</h2>
                                    <br/>
                                    <p className="card-text h4">Colplay es una banda británica de pop rock y tock alternativo formada en Londres en 1996. Está integrada por Chris Martin, Jon Buckland, Guy Berryman y Will Champion. Es uno de los grupos más relevantes de las décadas de los 2000 y principios de 2010 </p>
                                    <br/>
                                    <p className="card-text h5">Lugar: Estadio Olímpico Pascual Guerrero </p>
                                    <p className="card-text h5">Fecha: 10-Diciembre-2021</p>
                                    <p className="card-text h5">Hora: 10:00pm </p>
                                    <p className="card-text h5">Precio unidad: $150.000 COP</p>
                                </div>
                                <Link to="/compra_boleta">
                               <button type="submit" className="btn col-11 text-center mx-3" id="boton1">COMPRAR BOLETAS</button>  
                               </Link> 
                            </div>
                        </div>
                    </div>

            <p className="card-text mt-5 h1">Términos y condiciones:</p> 
            <p className="card-text mt-3 h2">1. Al realizar la compra, coloque los datos completos del comprador.</p> 
            <p className="card-text mt-3 h2">2. Recibirá un (1) correo electrónico, con la confirmación de su compra y  con el PDF del boleto.</p>    
            <p className="card-text mt-3 h2">3. Imprima el  boleto, tenga en cuenta que tendrá un código de barras que será verificado al ingreso del evento.</p>    
            <p className="card-text mt-3 mb-5 h2">4. Si no tiene su boleto  tenga en cuenta que no se permitirá el ingreso</p>          
            
            </div>


            <Footer/>

        </>

    );
        

    
}export default Boleteria
