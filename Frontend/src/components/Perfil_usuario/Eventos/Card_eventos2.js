import React, { useEffect, useState } from 'react'
import imagenMusic from '../assets/coldplay.jpg'
import imagenMusic2 from '../assets/metallica.jpg'



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
            <h1 className="pt-5">PRÓXIMOS EVENTOS</h1>
            <h3 className="text mt-5">Explore nuestros servicios y contenido relacionado</h3>
            <hr className="featurette-divider" />

            {
                stateEvents.map(element => 
                   <Card_eventos info={element}></Card_eventos>
                )
            }
        </>
    );
}
export default Card_eventos2