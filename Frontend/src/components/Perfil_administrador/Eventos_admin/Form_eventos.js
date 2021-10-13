import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Form_evento.css'

function Form_eventos() {

    //State para la fecha DatePicker inicial y final

    const [selectedDateinicial, setselectedDateinicial] = useState(null)
    const [selectedDatefinal, setselectedDatefinal] = useState(null)

    return (
        <>

            <div className="container">
                <br></br>

                <div className="p-3 mb-3 text-white rounded" id="crear">
                    <h1 >CREAR EVENTO</h1>

                </div>



                <div class="row">
                    <div class="col-8">


                        <form id="formulario_crear">

                            <div className="form-row" >

                                <div className="mb-2">
                                    <label className="col-form-label text-dark mr-3" >Nombre evento</label>
                                    <input type="text"
                                        className="form-control"
                                        id="nombre_evento"
                                        placeholder="Nombre evento">
                                    </input>

                                </div>
                            </div>

                            

                                    <div className="form-row">

                                        <div className="mb-3">
                                            <label className="col-form-label text-dark mr-3" >Lugar evento</label>
                                            <input type="text"
                                                className="form-control"
                                                id="lugar_evento"
                                                placeholder="Lugar evento">
                                            </input>

                                        </div>
                                    </div>
                              


                                <div class="col-8">
                                    <div className="form-row">

                                        <div className="mb-3">
                                            <label className="col-form-label text-dark mr-3" >Categoria evento</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected value="1">MUSICA</option>
                                                <option  value="2">CULTURA</option>
                                                <option value="3">DEPORTES</option>
                                                <option value="3">OTRO</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            

                            
                                <div className="col-8">
                                    <div className="form-row">

                                        <div className="mb-3">
                                            <label className="col-form-label text-dark mr-3"> Aforo</label>
                                            <input type="number"
                                                className="form-control"
                                                id="aforo_evento"
                                                placeholder="Aforo evento">
                                            </input>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-8">
                                    <div className="form-row">

                                        <div className="mb-3">
                                            <label className="col-form-label text-dark mr-3" >Precio Boleta</label>
                                            <input type="number"
                                                className="form-control"
                                                id="categoria_evento"
                                                placeholder="Precio evento">
                                            </input>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-8">
                                    <div className="form-row">

                                        <div className="mb-3">
                                            <label class="col-form-label text-dark mr-3" >Hora presentación</label>
                                            <input type="time"
                                                className="form-control"
                                                id="hora_evento"
                                                placeholder="Hora evento">
                                            </input>

                                        </div>
                                    </div>
                                </div>
                            

                            

                                
                            <div class="col-8">
                                    <div className="form-row mr-2">

                                        <div className="none">
                                            <label className="col-form-label text-dark mr-3" >Fecha inicio evento</label>
                                            <DatePicker
                                                selected={selectedDateinicial}
                                                onChange={date => setselectedDateinicial(date)}
                                                dateFormat='dd/MM/yyyy'
                                                minDate={new Date()}
                                            

                                            />

                                        </div>
                                    </div>
                                </div>

                                <div class="col-8">
                                    <div className="form-row mr-2">

                                        <div className="mb-4">
                                            <label class="col-form-label text-dark mr-3" >Fecha fin evento</label>
                                            <DatePicker
                                                selected={selectedDatefinal}
                                                onChange={date => setselectedDatefinal(date)}
                                                dateFormat='dd/MM/yyyy'
                                                minDate={new Date()}
                                                style={{ border: "solid 1px pink" }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                

                            

                            <div className="form-floating">
                                <div className="mb-3" >
                                    <textarea className=" form-control text-dark mr-3" cols="12" rows="5"
                                        id="descripcion_evento" placeholder="Escriba aquí la descripcion del evento"></textarea>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end" >
                            <button className="btn"id="btn-crear" type="submit">Crear evento</button>
                            </div>
                        </form>

                    </div>
                    <div class="col-4"><div class="mb-3">
                        <label for="formFile" class="form-label text-dark">Imagen del evento</label>
                        <input class="form-control" type="file" id="formFile"></input>
                    </div></div>
                </div>
            </div>

        </>
    )
}
export default Form_eventos