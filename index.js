var express = require('express');
var path = require('path');
var app = express();
var api = require('./routes/routes');

app.use('/api',api);

app.listen(3001,()=>{
    console.log('Estoy corriendo en el puerto 3001')
})