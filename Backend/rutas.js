const router = require('express').Router()
const { response } = require('express');
const {Pool} = require('pg');


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


    try {

        const response= await pool.query("SELECT * FROM login WHERE username = $1",[req.body.name]);

        //console.log(req.body.name)
     
        //console.log(response.rows[0])

        

        if(response.rows[0] === undefined){

            res.json(JSON.stringify({}))
              

        }else{
            res.json(JSON.stringify(response.rows[0])) 
        }

        
    } catch  {
        
        res.json(JSON.stringify({}))
        
    }


}



router.post('/', (req,res)=>{
    console.log('mnddsnddsam')

    //getUser(req, res);

    res.json(objeto)


})

router.post('/registro', (req,res)=>{

    getUser(req, res);

    //res.json(objeto)


})

module.exports = router