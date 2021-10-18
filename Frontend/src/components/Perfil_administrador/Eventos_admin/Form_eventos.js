import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Form_evento.css'

function Form_eventos() {






    const [nombreEvento, setNombreEvento] = useState('')
    const [lugarEvento, setLugarEvento] = useState('');
    const [categoria, setCategoria] = useState('');
    const [aforoEvento, setAforoEvento] = useState(0);
    const [precioEvento, setPrecioEvento] = useState(0);
    const [horaEvento, setHoraEvento] = useState('');
    const [fechaInicio, setFechaInicio] = useState()
    const [fechaFin, setFechaFin] = useState()
    const [imagen, setImagen] = useState('')
    const [descripcion, setDescripcion] = useState('')







    const [validNombreEvento, setValidNombreEvento] = useState('');
    const [validLugar, setValidLugar] = useState('');
    const [validCategoria, setValidCategoria] = useState('');
    const [validAforo, setValidAforo] = useState('');
    const [validPrecio, setValidPrecio] = useState('');
    const [validHora, setValidHora] = useState('');
    const [validFechaInicio, setValidFechaInicio] = useState('')
    const [validFechaFin, setValidFechaFin] = useState('')
    const [validimagen, setValidImagen] = useState('')

    const [validDescripcion, setValidDescripcion] = useState('')



    function validarCampos() {
        let validador = true

        if (nombreEvento === '') {
            setValidNombreEvento('is-invalid')
            validador = false
        } else setValidNombreEvento('')
        if (lugarEvento === '') {
            setValidLugar('is-invalid')
            validador = false
        } else setValidLugar('')
        if (categoria === '') {
            setValidCategoria('is-invalid')
            validador = false
        } else setValidCategoria('')
        if (aforoEvento === 0) {
            setValidAforo('is-invalid')
            validador = false
        } else setValidAforo('')
        if (precioEvento === 0) {
            setValidPrecio('is-invalid')
            validador = false
        } else setValidPrecio('')
        if (horaEvento === '') {
            setValidHora('is-invalid')
            validador = false
        } else setValidHora('')
        if (fechaInicio === undefined) {
            setValidFechaInicio('is-invalid')
            validador = false
        } else setValidFechaInicio('')
        if (fechaFin === undefined) {
            setValidFechaFin('is-invalid')
            validador = false
        } else setValidFechaFin('')
        if (imagen === '') {
            setValidImagen('is-invalid')
            validador = false
        } else setValidImagen('')
        if (descripcion === '') {
            setValidDescripcion('is-invalid')
            validador = false
        } else setValidDescripcion('')

        return validador
    }


    function handleSubmit(e) {
        e.preventDefault()
        if (validarCampos()) {
            crearEvento()
        }

    }


    function verfile() {


        console.log(imagen)

        //const url = `../../assets/${file.name}.jpg`





    }


    async function crearEvento() {



        var datos = {
            nombre_evento: nombreEvento,
            lugar_evento: lugarEvento,
            categoria_evento: categoria,
            aforo: aforoEvento,
            precio_boleta: precioEvento,
            hora_inicio: horaEvento,
            fecha_inicio_evento: fechaInicio,
            fecha_fin_evento: fechaFin,
            imagen: imagen,
            descripcion_evento: descripcion
        }

        const response = await fetch('http://localhost:5000/eventos', {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        )
        if (response.ok) {
            alert('Se ha registrado el evento con exito')
        }








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
                } else
                    if (name === "aforo_evento") {
                        setAforoEvento(value)
                    } else
                        if (name === "precio_evento") {
                            setPrecioEvento(value)
                        } else
                            if (name === "hora_evento") {
                                setHoraEvento(value)
                            }else 
                            if (name === "descripcion_evento") {
                                setDescripcion(value)
                            }


    }









    return (
        <>

            <div className="container">
                <br></br>

                <div className="p-3 mb-3 text-white rounded" id="crear">
                    <h1 >CREAR EVENTO</h1>
                    {imagen}
                </div>



                <div className="row">
                    <div className="col-8">


                        <form onSubmit={(e) => handleSubmit(e)} id="formulario_crear">

                            <div className="form-row" >

                                <div className="mb-2">
                                    <label className="col-form-label text-dark mr-3" >Nombre evento</label>
                                    <input type="text"
                                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                                        name="nombre_evento"
                                        className={`${validNombreEvento} form-control`}
                                        placeholder="Nombre evento">
                                    </input>
                                    <div className="mb-3 invalid-feedback">Ingrese La descripción del evento</div>
                                </div>
                            </div>



                            <div className="form-row">

                                <div className="mb-3">
                                    <label className="col-form-label text-dark mr-3" >Lugar evento</label>
                                    <input type="text"
                                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                                        className={`${validLugar}  form-control`}
                                        name="lugar_evento"
                                        placeholder="Lugar evento">
                                    </input>
                                    <div className="mb-3 invalid-feedback">Ingrese el lugar del evento</div>
                                </div>
                            </div>



                            <div className="col-8">
                                <div className="form-row">

                                    <div className="mb-3">
                                        <label className="col-form-label text-dark mr-3" >Categoria evento</label>
                                        <select
                                            className={`${validCategoria} form-select`}
                                            aria-label="Default select example"
                                            name='select_categoria'
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                        >
                                            <option value="MUSICA" selected>MUSICA</option>
                                            <option value="CULTURA" >CULTURA</option>
                                            <option value="DEPORTES">DEPORTES</option>
                                            <option value="OTRO">OTRO</option>
                                        </select>
                                        <div className="mb-3 invalid-feedback">Seleccione la categoria del evento</div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-8">
                                <div className="form-row">

                                    <div className="mb-3">
                                        <label className="col-form-label text-dark mr-3"> Aforo</label>
                                        <input type="number"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            className={`${validAforo} form-control`}
                                            name="aforo_evento"
                                            placeholder="Aforo evento">
                                        </input>
                                        <div className="mb-3 invalid-feedback">Seleccione el aforo del evento</div>

                                    </div>
                                </div>
                            </div>

                            <div classNmae="col-8">
                                <div className="form-row">

                                    <div className="mb-3">
                                        <label className="col-form-label text-dark mr-3" >Precio Boleta</label>
                                        <input type="number"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            className={`${validPrecio} form-control`}
                                            name="precio_evento"
                                            placeholder="Precio evento">
                                        </input>
                                        <div className="mb-3 invalid-feedback">Seleccione el precio de la boleta</div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-8">
                                <div className="form-row">

                                    <div className="mb-3">
                                        <label class="col-form-label text-dark mr-3" >Hora presentación</label>
                                        <input type="time"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            className={`${validHora} form-control`}
                                            name="hora_evento"
                                            placeholder="Hora evento">
                                        </input>
                                        <div className="mb-3 invalid-feedback">Seleccione la hora de inicio del evento</div>

                                    </div>
                                </div>
                            </div>





                            <div className="col-8">
                                <div className="form-row mr-2">

                                    <div className="none">
                                        <label className="col-form-label text-dark mr-3" >Fecha inicio evento</label>
                                        <div className={validFechaInicio}>
                                            <DatePicker

                                                selected={fechaInicio}
                                                name='fecha_inicio'
                                                onChange={date => setFechaInicio(date)}
                                                dateFormat='dd/MM/yyyy'
                                                minDate={new Date()}
                                            />
                                        </div>
                                        <div className="mb-3 invalid-feedback">Seleccione la fecha del evento</div>

                                    </div>
                                </div>
                            </div>

                            <div className="col-8">
                                <div className="form-row mr-2">

                                    <div className="mb-4">
                                        <label class="col-form-label text-dark mr-3" >Fecha fin evento</label>
                                        <div className={validFechaFin}>
                                            <DatePicker
                                                selected={fechaFin}
                                                name='fecha_fin'
                                                onChange={date => setFechaFin(date)}
                                                dateFormat='dd/MM/yyyy'
                                                minDate={new Date()}
                                                style={{ border: "solid 1px pink" }}
                                            />
                                        </div>
                                        <div className="mb-3 invalid-feedback">Seleccione la fecha de finalizacion del evento</div>
                                    </div>
                                </div>
                            </div>





                            <div className="form-floating">
                                <div className="mb-3" >
                                    <textarea className={`${validDescripcion} form-control text-dark mr-3`}
                                        cols="12"
                                        rows="5"
                                        name="descripcion_evento"
                                        onChange= {(e)=>handleChange(e.target.name, e.target.value)}
                                        placeholder="Escriba aquí la descripcion del evento">
                                    </textarea>
                                    <div className="mb-3 invalid-feedback">Ingrese una descripción</div>
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
                    <div className="col-4">
                        <div class="mb-3">
                            <label for="formFile" class="form-label text-dark">Imagen del evento</label>
                            <input onChange={(e) => { setImagen(`../../assets/${e.target.files[0].name}`); }}
                                className={`${validimagen} form-control`}
                                name='imagen'
                                type="file" id="formFile"></input>
                            <div className="mb-3 invalid-feedback">Seleccione la hora de inicio del evento</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Form_eventos