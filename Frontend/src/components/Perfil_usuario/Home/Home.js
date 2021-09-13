import React from 'react';
import Slider2 from './Slider2'
import Card_inicio from './Card_inicio'
import Menu from '../Menu/Menu'
import Footer from '../Footer/footer'


function Home({user}){

    return(
        <>
            <Menu/>
            
 
            <div className="container">
                user
                <hr></hr>
                <h1>Inicio</h1>
                <Slider2 /> 
                <hr className="featurette-divider" />
                <Card_inicio /> 
                <h1>{user ? "logged" : "unlogged"}</h1>

                
                

            </div>

            <Footer/>
        </>
    );
}
export default Home


 
 