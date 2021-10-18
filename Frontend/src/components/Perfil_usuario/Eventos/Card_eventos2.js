import React, { useEffect, useState } from 'react'
import imagenMusic from '../assets/coldplay.jpg'
import imagenMusic2 from '../assets/metallica.jpg'
import './Card_eventos2.css'



import {
    Link
} from 'react-router-dom'
import Card_eventos from './Card_eventos'



function Card_eventos2() {


    const [stateEvents, setStateEvents] = useState([])
    


    const arrayEvents = async () => {
        try {
            const response = await fetch('http://localhost:5000/eventos')
            const arrayEventos = await response.json()
            const dataEventos = JSON.parse(arrayEventos)
            //moveImage(dataEventos)
            setStateEvents(...stateEvents, dataEventos)
            
        } catch { alert('execpcion') }
    }



    function moveImage(dataEventos){
        dataEventos.array.forEach(element => {
            File.move(dataEventos.imagen,)
        })

    }


    useEffect(async () => {
        await arrayEvents()
    }, [])


    return (
        <>
            <br/><br/><br/>
            <div className="p-3 mb-3 text-white rounded" id="proximos_eventos">
                    <h1>PRÓXIMOS EVENTOS</h1>
            </div>

            <h3 className="text mt-3">Explore nuestros servicios y contenido relacionado</h3>
            <hr className="featurette-divider" />

            {
                stateEvents.map(element => 
                   <Card_eventos propEvento={element}></Card_eventos>
                )
            }
        </>
    );
}
export default Card_eventos2