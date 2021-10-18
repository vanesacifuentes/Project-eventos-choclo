import React, { useContext } from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/footer";
import imagenMusic from '../assets/coldplay.jpg'
import './Compra_boleta.css'
import Context from './../Context/Context'

import {
    Link
} from 'react-router-dom'

function Boleteria() {

    const {evento,setearEvento} = useContext(Context)
    



    return (

        <>
            <Menu />

            <div className="container pt-5">

                <br /><br /><br />

                <div className="p-3 mb-3 text-white rounded" id="informacion_compra">
                    <h1>INFORMACIÓN DEL EVENTO</h1>

                </div>


                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-6">
                            <img src={evento.imagen} className="img-fluid rounded-start" alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">


                                <h2 className="card-title">{evento.nombre_evento}</h2>

                                <p className="card-text h5 mb-3">{evento.descripcion_evento}</p>

                                <p className="card-text h5">Lugar: {evento.lugar_evento}</p>
                                <p className="card-text h5">Fecha: {evento.fecha_inicio_evento}</p>
                                <p className="card-text h5">Hora: {evento.hora_inicio}</p>
                                
                            </div>
                            <Link to="/compra_boleta">
                                    
                                <button 
                                    className="btn col-11 text-center mx-3 mb-2"
                                    id="boton1">COMPRAR BOLETAS
                                </button>
                            </Link>
                        </div>
                    </div>
                    <p className="card-text mt-2 h1">Términos y condiciones:</p>
                    <p className="card-text mt-3 h5">1. Al realizar la compra, coloque los datos completos del comprador.</p>
                    <p className="card-text mt-3 h5">2. Recibirá un (1) correo electrónico, con la confirmación de su compra y  con el PDF del boleto.</p>
                    <p className="card-text mt-3 h5">3. Imprima el  boleto, tenga en cuenta que tendrá un código de barras que será verificado al ingreso del evento.</p>
                    <p className="card-text mt-3 mb-5 h5">4. Si no tiene su boleto  tenga en cuenta que no se permitirá el ingreso</p>

                </div>


            </div>


            <Footer />

        </>

    );



} export default Boleteria
