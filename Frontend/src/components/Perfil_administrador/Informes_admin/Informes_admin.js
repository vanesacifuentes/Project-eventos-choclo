import React from 'react'
import './Informes.css'
//import { Line } from '@ant-design/charts';

function Informes_admin() {


    //Información para gráfica
    const data = [
        { año: '2019', valor_venta: '$9.000.000' },
        { año: '2020', valor_venta: '$10.000.000' },
        { año: '2021', valor_venta: '$12.000.000' },

    ];

    const configuracion = {

        data,
        height: 400,
        title: {
            visible: true,
            text: "Ventas por año"
        },
        xField: 'año',
        yField: 'valor_venta',
        point: {
            visible: true,
            size: 5,
            shape: 'diamond',
        },
        label: {
            style: {
                fill: '#aaa',
            },
        },
    };




    return (
        <>

            <div className="container">

                <br></br>

                <div className="rounded p-3 mb-3 text-white" id="informes">
                    <h1 >INFORMES EVENTOS</h1>
                    
                </div>


                <div className="row p-5">
                    <div className="col">

                        <div className="main_cards">
                            <div className="card mx-4 px-3" id="card1">
                                <i className="fas fa-dollar-sign fa-3x pt-2"> </i>
                                <div className="card-inner">
                                    <p className="text-primary-p">Ventas realizadas</p>
                                    <span className="font-bold text-little">$4.5000.000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="main_cards">
                            <div className="card mx-4 px-3" id="card2">
                                <i className="fas fa-ticket-alt fa-3x pt-2"> </i>
                                <div className="card-inner">
                                    <p className="text-primary-p">No. Boletas vendidas</p>
                                    <span className="font-bold text-little">4000</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="main_cards">
                            <div className="card mx-4 px-3" id="card3">
                                <i className="fas fa-user-check fa-3x pt-2"> </i>
                                <div className="card-inner">
                                    <p className="text-primary-p">Suscriptores</p>
                                    <span className="font-bold text-little">5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="container p-5">
                    <div className="row">
                        <div className="col">
                            <h3>Reporte ventas por Año</h3>
                            <select className="select-css">
                                <option value="anho1">2019</option>
                                <option value="anho2" selected>2020</option>
                                <option value="anho3">2021</option>
                            </select>
                        </div>
                        <div className="col">
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Informes_admin
