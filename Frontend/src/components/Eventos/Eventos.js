import React from 'react';
import Menu from '../Menu/Menu'
import Footer from '../Footer/footer'
import Card_eventos2 from '../Eventos/Card_eventos2'




function Eventos(){

    return(
        <>
            <Menu/>

            <div className="container">

                <hr></hr>
                <h6>Eventos</h6>
            <Card_eventos2/>

            </div>

            <Footer/>

            
        </>
    );
}
export default Eventos