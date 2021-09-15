import React, { useContext } from 'react';
import Slider2 from './Slider2'
import Card_inicio from './Card_inicio'
import Menu from '../Menu/Menu'
import Footer from '../Footer/footer'
import Context from '../Context/Context.js';


function Home(){


    const {usuario} = useContext(Context)
    return(
        <>
            <Menu/>
            
 
            <div className="container">
                
                <hr></hr>
                <h1>Inicio</h1>
                <Slider2 /> 
                <hr className="featurette-divider" />
                <Card_inicio /> 
                <h1>{usuario.nombre_usuario}</h1>

                
                

            </div>

            <Footer/>
        </>
    );
}
export default Home


 
 