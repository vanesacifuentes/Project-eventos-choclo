const router = require('express').Router()
const { response } = require('express');
const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    password:'ADMIN',
    user:'postgres',
    port: '5432',
    database: 'eventos-choclo'

});


let objeto = {
    nombre:'vane'

}

const getUser = async (req, res)=>{

   const response= await pool.query('SELECT * FROM usuario WHERE id_usuario=1');

   console.log(response.rows)

   res.json(response.rows[0])



}



router.get('/', (req,res)=>{

    getUser(req, res);

    //res.json(objeto)


})

module.exports = router