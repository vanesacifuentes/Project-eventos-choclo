import React from 'react';
import Menu from '../Menu/Menu'
import Footer from '../Footer/footer'
import './Contacto.css'




function Contacto() {

    return (
        <>
            <Menu />

            <div className="container pt-5">

                <br /><br /><br />

                <div className="p-3 mb-3 text-white rounded" id="contacto">
                    <h1>CONTACTO</h1>

                </div>


                <form>

                    <div className="pt-4 mb-3">
                        <label className="form-label text-dark">Nombre completo</label>
                        <input type="text"
                            className="form-control"
                            id="nombre_contacto"
                            aria-describedby="nombre_contacto" />
                        <div id="nombre_contacto" className="form-text">Requerido</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Correo electrónico</label>
                        <input type="email"
                            className="form-control"
                            id="correo_contacto"
                            aria-describedby="email" />
                        <div id="email" className="form-text">Requerido</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Teléfono</label>
                        <input type="number"
                            className="form-control"
                            id="telefono_contacto"
                            aria-describedby="telefono_contacto" />
                        <div id="telefono_contacto"
                            className="form-text">Requerido</div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Escriba sus comentarios</label>
                        <textarea type="email"
                            className="form-control"
                            id="correo_contacto"
                            aria-describedby="email" />
                        <div id="text_area"
                            className="form-text">Requerido</div>
                    </div>

                    <div className="pb-3">
                        <button type="submit"
                            className="btn ">Enviar comentarios</button>
                    </div>

                </form>

            </div>

            <Footer />


        </>
    );
}
export default Contacto