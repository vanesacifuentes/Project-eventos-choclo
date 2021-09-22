import React, { useContext } from 'react';
import Slider2 from './Slider2'
import Card_inicio from './Card_inicio'
import Menu_admin from '../Menu/Menu'
import Footer from '../Perfil_usuario/Footer/footer'



function Home_admin(){


    
    return(
        <>
            <Menu/>
            
 
            <div className="container">
                
                <hr></hr>
                <h1>Inicio</h1>
                <Slider2 /> 
                <hr className="featurette-divider" />
                <Card_inicio /> 
                

                
                

            </div>

            <Footer/>
        </>
    );
}
export default Home