const router = require('express').Router()
const { response } = require('express');
const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    password: 'admin',
    user: 'postgres',
    port: '5432',
    database: 'eventos-choclo'

});




//////////////////////////////////////////////////////////////////////////////////////
const getUser = async (req, res) => {

    const response = await pool.query("SELECT * FROM usuario WHERE username = $1 and contrasena = $2", [req.body.username, req.body.pass]);
    console.log('zsnxcknsaskn', response.rows[0])
    if (response.rows[0] === undefined) {
        res.json(JSON.stringify({}))
    } else {

        res.json(JSON.stringify(response.rows[0]))
    }
}



const createUser = async (req, res) => {

    const dataquery = Object.values(req.body)
    const response = await pool.query("INSERT INTO USUARIO" +
        "(CEDULA_USUARIO, NOMBRE_USUARIO, EMAIL_USUARIO, USERNAME, CONTRASENA, ESTADO ) VALUES" +
        "($1, $2, $3, $4, $5, $6)",
        dataquery);

    res.send('user created')
}



const getEvents = async (req, res) => {

    const response = await pool.query("SELECT * FROM EVENTOS")

    console.log(response.rows)

    res.json(JSON.stringify(response.rows))


}


const deleteEvents = async (req, res) => {

    console.log('delete++++++++++++++++++++++++++++++++++++++++++')
    const idEvento = req.params.id_evento

    //console.log(req.params)

    await pool.query("DELETE FROM EVENTOS WHERE ID_EVENTO = $1",[idEvento])

    getEvents(req, res)

}


const createEvents = async(req, res)  => {

   
    

    const dataquery = Object.values(req.body)
    console.log(dataquery)

    const response = await pool.query("INSERT INTO EVENTOS" +
        "(nombre_evento, lugar_evento, categoria_evento, aforo, precio_boleta, hora_inicio, fecha_inicio_evento, fecha_fin_evento, imagen, descripcion_evento)"+ 
        "VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)",
        dataquery);

    res.send('user created')
}



////////////////////////////////////////////////////////////////////////////////////////////////////

router.post('/registro', (req, res) => {
    createUser(req, res);
})

router.post('/', (req, res) => {
    getUser(req, res);
})

router.get('/eventos', (req, res) => {
    getEvents(req, res);
})


router.delete('/eventos/:id_evento', (req, res) => {
    deleteEvents(req, res);
})


router.put('/eventos', (req, res) => {
    createEvents(req, res);
})







module.exports = router