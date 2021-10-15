import React from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/footer";
import imagenEscenario from '../assets/escenario.jpg'
import './Compra_boleta.css'

import {
    Link
} from 'react-router-dom'

<link rel="stylesheet" href="assets/vendor/sweetalert2/dist/sweetalert2.min.css"></link>;
<script src="assets/vendor/sweetalert2/dist/sweetalert2.min.js"></script>

function Compra_boleta() {


    const categoria_eventos = [
        {
            id_categoria: "1",
            categoria_boleta: "MUSICA",
            zona: "VIP",
            precio_unidad: "150.000",
            cantidad_boletas: "0"

        },
        {
            id_categoria: "1",
            categoria_boleta: "MUSICA",
            zona: "PALCO",
            precio_unidad: "100.000",
            cantidad_boletas: "0",

        },
        {
            id_categoria: "1",
            categoria_boleta: "MUSICA",
            zona: "GENERAL",
            precio_unidad: "50.000",
            cantidad_boletas: "0",

        }
    ]

    const render_zona_evento = (categoria, index) => {
        return (


            <tr key={index}>
                <td>{categoria.zona}</td>
                <td>{categoria.precio_unidad}</td>
                <select className="form-select mx-2 px-2" aria-label="Default select example">
                    <option selected value="1">0</option>
                    <option value="2">1</option>
                    <option value="3">2</option>
                    <option value="3">3</option>
                </select>

            </tr>
        )
    }


    return (

        <>
            <Menu />

            <div className="container pt-5">
                <br /><br /><br />

                <div className="p-3 mb-3 text-white rounded" id="informacion_compra">
                    <h1>INFORMACIÓN DE TU COMPRA</h1>

                </div>

                <div className="container border mb-5">
                    <div className="row w-100">
                        <div className="col-6">

                            <div className="content-title text-center pt-5">
                                <h2 className="content-title " id="escenario">ESCENARIO</h2>
                            </div>

                            <div className="pt-2">
                                <img src={imagenEscenario} className="img-fluid rounded-start" alt="..." />
                            </div>

                            <div className="content-body" id="">

                                <div className="content-title text-center pt-3">
                                    <h2 className="content-title" id="titulo_evento">CONCIERTO COLDPLAY</h2>
                                </div>

                                <div className="content-title d-flex justify-content-center">
                                    <i className="mt-2 fas fa-map-marker-alt fa"
                                        style={{ color: "#00000" }}></i>
                                    <div className="mx-2 mb-4 h5">Estadio Olimpico Pascual Guerrero</div>
                                </div>

                                <div className="content-title d-flex justify-content-center">
                                    <i className="mt-2 fas fa-calendar-check fa"
                                        style={{ color: "#00000" }}></i>
                                    <div className="mx-2 mb-4 h5">Viernes 10 de diciembre</div>
                                </div>

                                <div className="content-title d-flex justify-content-center">
                                    <i className="mt-2 fas fa-dollar-sign fa"
                                        style={{ color: "#00000" }}></i>
                                    <div className="mx-2 mb-4 h5">150.000</div>
                                </div>

                                <div className="content-title d-flex justify-content-center">
                                    <i className="mt-2 fas fa-clock fa"
                                        style={{ color: "#00000" }}></i>
                                    <div className="mx-2 mb-4 h5">10:00 pm</div>
                                </div>


                            </div>
                        </div>

                        <div className="col-6">

                            <div className="pt-5 container overflow-hidden">
                                <div className="row">
                                    <div className="">
                                        <div className="p-3 border text-center fw-bold" id="zona_boletas">Seleccione sus tickets y la zona</div>
                                    </div>

                                    <div className="pb-4">
                                        <div className="p-3 border text-center" id="su_compra">Valor de su compra: $300.000</div>
                                    </div>

                                    <table className="table pt-5">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col">Zona</th>
                                                <th scope="col">Precio unidad</th>
                                                <th scope="col">Cantidad Boletas</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categoria_eventos.map(render_zona_evento)}
                                        </tbody>
                                    </table>
                                </div>
                                <form>

                                    <div className="content-title text-center pt-3">
                                        <h2 className="content-title" id="titulo_evento">FORMULARIO  DE PAGO</h2>
                                    </div>
                                    <div className="form" >

                                        <div className="mb-4">

                                            <input type="text"
                                                className="form-control mt-3"
                                                id="nombre_asistente"
                                                placeholder="Nombre comprador*">
                                            </input>


                                            <input type="number"
                                                className="cedula_asistente mt-3"
                                                id="cedula_asistente"
                                                placeholder="Cedula*">
                                            </input>


                                            <input type="e-mail"
                                                className="form-control mt-3"
                                                id="correo_asistente"
                                                placeholder="E-mail*">
                                            </input>

                                            <select className="form-select mt-3" aria-label="Default select example">
                                                <option selected value="1">Forma de pago*</option>
                                                <option value="2">Efectivo</option>
                                                <option value="3">Tarjeta de crédito</option>
                                                <option value="3">PSE</option>
                                            </select>


                                            <button class="btn btn-success" data-toggle="sweet-alert" data-sweet-alert="success">Success alert</button>

                                            <div className="d-flex justify-content-end pt-5" >
                                                <button className="btn mb-3" data-toggle="sweet-alert" data-sweet-alert="success">Confirmar compra</button>
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );



} export default Compra_boleta