import React from 'react'
import imagen1 from '../assets/bannerp.jpg'
import imagen2 from '../assets/baner1.jpg'
import imagen3 from '../assets/baner3.jpg'
import imagen4 from '../assets/baner2.jpg'


function Slider() {
    return (
        <>
            <div id="carouselExampleIndicators"  className="carousel slide pt-5" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={imagen1} className="d-block w-100 h-10" alt="Música" />
                    </div>
                    <div className="carousel-item">
                        <img src={imagen2} className="d-block w-100 h-10" alt="Cultura"/>
                    </div>
                    <div class="carousel-item">
                        <img src={imagen3} className="d-block w-100 h-10" alt="Deporte"/>
                    </div>
                    <div class="carousel-item">
                        <img src={imagen4} className="d-block w-100 h-10" alt="Deporte"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>

    );


} export default Slider

