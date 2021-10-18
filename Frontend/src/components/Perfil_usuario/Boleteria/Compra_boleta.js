import React, { useContext, useState, useEffect } from "react";
import Menu from "../Menu/Menu";
import Footer from "../Footer/footer";
import imagenEscenario from '../assets/escenario.jpg'
import './Compra_boleta.css'
import Context from './../Context/Context'
import swal from 'sweetalert'


function Compra_boleta() {

    const { evento } = useContext(Context);
    const [zona_boleteria, setZonaBoleteria] = useState([]);
    const [nombre_asistente, setNombre] = useState('');
    const [cedula_asistente, setCedula] = useState('');
    const [email, setEmail] = useState('');
    const [select_fp, setFormaPago] = useState('');

    const [validNombre, setValidNombre] = useState('');
    const [validCedula, setValidCedula] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validFormaPago, setValidFormaPago] = useState('');

    const [input_check, setInputCheck] = useState('disabled')

    useEffect(async () => {
        await CargarZonaEventos()
    }, [])

    //console.log(zona_boleteria)

    async function CargarZonaEventos() {


        try {
            //console.log('holi', evento)
            const response = await fetch(`http://localhost:5000/eventos/${evento.id_evento}`)
            const arrayEventos = await response.json()
            const dataEventos = JSON.parse(arrayEventos)
            //moveImage(dataEventos)
            console.log(dataEventos)
            setZonaBoleteria(...zona_boleteria, dataEventos)

        } catch { console.log('excepción') }

    }

    //Seleccionar input-check
    function handleInputChange(){
        setInputCheck()

    }

    //Arreglo para cantidad de boletas
    function listnumber() {
        const numero_boletas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        return (
            <>
                {numero_boletas.map((number, key) => {
                    return <option key={key}>{number}</option>
                })}
            </>
        );
    }

    //Valor total de compra
    function valor_compra() {
        return (

            <>{parseInt(/*precio_boleta * listNumber*/)}</>
        );
    }


    const render_zona_evento = (zona) => {
        return (

            <tr key={zona.id_zona}>
                <input className="form-check-input"
                    onChange={handleInputChange}
                    type="checkbox" id="inlineCheckbox1"
                    value="option1">
                </input>
                <td>{zona.nombre_zona}</td>
                <td>${new Intl.NumberFormat("en-EN").format(zona.precio_boleta)}</td>

                <select className="form-select mx-2 px-2"
                    aria-label="select">
                    {listnumber()}
                </select>

            </tr>
        );
    }

    //Sweet Alert
    const confirmacion_compra = () => {
        swal({
            title: "MENSAJE DE CONFIRMACIÓN",
            text: "¡Felicidades! su compra se ha realizado exitosamente",
            icon: "success",
            button: "Aceptar"
        })
    }

    function validarCampos() {
        let validador = true

        if (nombre_asistente === '') {
            setValidNombre('is-invalid')
            validador = false
        }
        if (cedula_asistente === '') {
            setValidCedula('is-invalid')
            validador = false
        }
        if (email === '') {
            setValidEmail('is-invalid')
            validador = false
        }
        if (select_fp === '') {
            setValidFormaPago('is-invalid')
            validador = false
        }
        return validador
    }

    /*function handleSubmit(e) {
        e.preventDefault()
        if (validarCampos()) {
            confirmacion_compra()
        }

    }*/


    function handleChange(targetName, targetValue) {
        if (targetName === "nombre_asistente") {
            setNombre(targetValue)
        } else {
            if (targetName === "cedula_asistente") {
                setCedula(targetValue)
            } else {
                if (targetName === "email") {
                    setEmail(targetValue)
                } else {
                    if (targetName === "select_fp") {
                        setFormaPago(targetValue)
                    }
                }
            }
        }
    }


    return (

        <>
            <Menu />

            <div className="container pt-5">
                <br /><br /><br />

                <div className="p-3 mb-3 text-white rounded" id="informacion_compra">
                    <h1>INFORMACIÓN DE TU COMPRA</h1>

                </div>

                <div className="container border mb-5">
                    <div className="row w-100">
                        <div className="col-6">

                            <div className="content-title text-center pt-5">
                                <h2 className="content-title " id="escenario">ESCENARIO</h2>
                            </div>

                            <div className="pt-2">
                                <img src={imagenEscenario} className="img-fluid rounded-start" alt="..." />
                            </div>

                            <div className="content-body" id="">

                                <div className="content-title text-center pt-3">
                                    <h2 className="content-title" id="titulo_evento">{evento.nombre_evento}</h2>
                                </div>

                                <div className="content-title d-flex justify-content-center">
                                    <i className="mt-2 fas fa-map-marker-alt fa"
                                        style={{ color: "#00000" }}></i>
                                    <div className="mx-2 mb-4 h5">{evento.lugar_evento}</div>
                                </div>

                                <div className="content-title d-flex justify-content-center">
                                    <i className="mt-2 fas fa-calendar-check fa"
                                        style={{ color: "#00000" }}></i>
                                    <div className="mx-2 mb-4 h5">{evento.fecha_inicio_evento}</div>
                                </div>

                                <div className="content-title d-flex justify-content-center">
                                    <i className="mt-2 fas fa-clock fa"
                                        style={{ color: "#00000" }}></i>
                                    <div className="mx-2 mb-4 h5">{evento.hora_inicio}</div>
                                </div>


                            </div>
                        </div>

                        <div className="col-6">

                            <div className="pt-5 container">
                                <div className="row">
                                    <div className="">
                                        <div className="p-3 border text-center fw-bold"
                                            id="zona_boletas">Seleccione sus tickets y la zona</div>
                                    </div>

                                    <div className="pb-4">
                                        <div className="p-3 border text-center"
                                            id="su_compra">Valor de su compra: ${valor_compra()}</div>
                                    </div>

                                    <table className="table pt-5">
                                        <thead className="table-light">
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Zona</th>
                                                <th scope="col">Precio unidad</th>
                                                <th scope="col">Cantidad Boletas</th>
                                                <th scope="col"></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {zona_boleteria.map(element => render_zona_evento(element))}
                                        </tbody>
                                    </table>
                                </div>

                                <div className="content-title text-center pt-3">
                                    <h2 className="content-title"
                                        id="titulo_evento">FORMULARIO  DE PAGO</h2>
                                </div>


                                <form className="mb-3">

                                    <div className="mb-3">
                                        <input type="text"
                                            className="form-control"
                                            name="nombre_asistente"
                                            id="nombre_asistente"
                                            placeholder="Nombre comprador*">
                                        </input>
                                        <div className="mb-3 invalid-feedback">Ingrese el nombre</div>
                                    </div>


                                    <div className="mb-3">
                                        <input type="number"
                                            className="form-control"
                                            id="cedula_asistente"
                                            placeholder="Cedula*"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className="mb-3 invalid-feedback">Ingrese la cedula</div>
                                    </div>

                                    <div className="mb-3">
                                        <input type="e-mail"
                                            className="form-control"
                                            id="email"
                                            placeholder="E-mail*"
                                            onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                        </input>
                                        <div className="mb-3 invalid-feedback">Ingrese el e-mail</div>
                                    </div>


                                    <div className="mb-3">
                                            <select className={validFormaPago} className="form-control"
                                                id="select_fp"
                                                aria-label="Default select example">
                                                <option selected value="1">Forma de pago*</option>
                                                <option value="2">Efectivo</option>
                                                <option value="3">Tarjeta de crédito</option>
                                                <option value="3">PSE</option>
                                                onChange={(e) => handleChange(e.target.name, e.target.value)}
                                            </select>
                                            <div className="mb-3 invalid-feedback">Ingrese la forma de pago</div>                                       
                                    </div>

                                    <div className="content-title pt-3">
                                        <h2
                                            className="content-title" id="valor_total">
                                            VALOR TOTAL ${valor_compra()}</h2>
                                    </div>

                                    <div
                                        className="d-flex justify-content-end pt-5" >
                                        <button
                                            type="submit"
                                            onClick={() => confirmacion_compra()}
                                            className="btn mb-3"
                                        >Confirmar compra
                                        </button>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    );



} export default Compra_boleta