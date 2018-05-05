const express = require('express');
var router = express.Router();

router.get('/profes',(req,res)=>{
    res.json({
        nombre: "Franco",
        localidad: "Rosario"
    })
})

module.exports = router