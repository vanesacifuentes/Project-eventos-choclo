import React from 'react'

function Slider(){
    return(
        <>
        <div id="slider" className="carousel slide" data-ride="carousel">

			<h1>Página de inicio</h1>
		    <ol className="carousel-indicators">
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		</div>
        </>

    );


}export default Slider

