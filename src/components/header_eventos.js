import React from 'react';
import imagen from '../assets/img/img1.jpg'

function HeaderEventos(){

    return(

        <>
        <div className="row bg-warning">
            <div className=" bg-warning col-2 align-items-center d-flex justify-content-center px-5">
                <img src={imagen} style={{width : 100}}/>
            </div>
            <div className="col-10 d-flex flex-column justify-content-center">
                <div className="d-flex justify-content-end " >
                    <h1>EVENTOS CHOCLO</h1>
                </div>
                <div className="d-flex justify-content-end ">
                    <h5 className="mx-4 text-white">Inicio</h5>
                    <h5 className="mx-4 text-white">Eventos</h5>
                    <h5 className="mx-4 text-white">Contacto</h5>
                    <h5 className="mx-4 text-white">Loguin</h5>
                </div>
            </div>
                
                
        </div>
        
        
        </>

    )
}
export default  HeaderEventos