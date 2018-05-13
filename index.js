var express = require('express');
var path = require('path');
var app = express();
var api = require('./routes/routes');

//En producción serviremos la app en React Js
//De esta forma, estaremos corriendo en un mismo servidor React (cliente) y la API (backend)
/* app.use(express.static(path.join(__dirname, 'client/build'))); */

app.use('/api',api);

app.listen(3001,()=>{
    console.log('Estoy corriendo en el puerto 3001')
})