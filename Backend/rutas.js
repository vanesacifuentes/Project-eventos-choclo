const router = require('express').Router()

let objeto = {
    nombre:'vane'

}


router.get('/', (req,res)=>{
    res.json(objeto)

})

module.exports = router