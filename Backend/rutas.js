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

    if (response.rows[0] === undefined) {
        res.json(JSON.stringify({}))
    } else {
        res.json(JSON.stringify(response.rows[0]))
    }

}


////////////////////////////////////////////////////////////////////////////////////////////////////
router.post('/', (req, res) => {
    getUser(req, res);
})

router.post('/registro', (req, res) => {
    getUser(req, res);
})







module.exports = router