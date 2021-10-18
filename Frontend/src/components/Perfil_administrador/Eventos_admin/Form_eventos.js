import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Form_evento.css'

function Form_eventos() {

    //State para la fecha DatePicker inicial y final

    const [selectedDateinicial, setselectedDateinicial] = useState(null)
    const [selectedDatefinal, setselectedDatefinal] = useState(null)


    const [nombreEvento, setNombreEvento] = useState('');
    const [lugarEvento, setLugarEvento] = useState('');
    const [categoria, setCategoria] = useState('');
    const [aforoEvento, setAforoEvento] = useState(0);
    const [precioEvento, setPrecioEvento] = useState(0);
    const [horaEvento, setHoraEvento] = useState('');




    function crearEvento(e) {
        e.preventDefault()
        console.log(selectedDateinicial)

    }


    function handleChange(name, value) {
        if (name === "nombre_evento") {
            console.log(value)
            setNombreEvento(value)
        } else
        if (name === "lugar_evento") {
            setLugarEvento(value)
        } else
        if (name === 'select_categoria') {
            setCategoria(value)
        }else 
        if (name === "aforo_evento") {
            setAforoEvento(value)
        }else 
        if (name === "precio_evento") {
            setPrecioEvento(value)
        }else
        if (name === "hora_evento") {
            setHoraEvento(value)
        }if (name === 'fecha_inicio') {
            setHoraEvento(value)
        }
        
        
        
        
        
        

    }









    return (
        <>

            <div className="container">
                <br></br>

                <div className="p-3 mb-3 text-white rounded" id="crear">
                    <h1 >CREAR EVENTO</h1>
                    {typeof(selectedDateinicial)}
                </div>



                <div class="row">
                    <div class="col-8">


                        <form onSubmit={(e) => crearEvento(e)} id="formulario_crear">

                            <div className="form-row" >

                                <div className="mb-2">
                                    <label className="col-form-label text-dark mr-3" >Nombre evento</label>
                                    <input type="text"
                                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                                        name="nombre_evento"
                                        className="form-control"
                                        placeholder="Nombre evento">
                                    </input>

                                </div>
                            </div>



                            <div className="form-row">

                                <div className="mb-3">
                                    <label className="col-form-label text-dark mr-3" >Lugar evento</label>
                                    <input type="text"
                                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                                        className="form-control"
                                        name="lugar_evento"
                                        placeholder="Lugar evento">
                                    </input>

                                </div>
                            </div>



                            <div class="col-8">
                                <div className="form-row">

                                    <div className="mb-3">
                                        <label className="col-form-label text-dark mr-3" >Categoria evento</label>
                                        <select
                                            className="form-select"
                                            aria-label="Default select example"
                                            name='select_categoria'
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                        >
                                            <option value="MUSICA" selected>MUSICA</option>
                                            <option value="CULTURA" >CULTURA</option>
                                            <option value="DEPORTES">DEPORTES</option>
                                            <option value="OTRO">OTRO</option>
                                        </select>
                                    </div>
                                </div>
                            </div>



                            <div className="col-8">
                                <div className="form-row">

                                    <div className="mb-3">
                                        <label className="col-form-label text-dark mr-3"> Aforo</label>
                                        <input type="number"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            className="form-control"
                                            name="aforo_evento"
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
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            className="form-control"
                                            name="precio_evento"
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
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            className="form-control"
                                            name="hora_evento"
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
                                            name='fecha_inicio'
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
                                <button className="btn"
                                    id="btn-crear"
                                    type="submit"
                                >Crear evento</button>
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