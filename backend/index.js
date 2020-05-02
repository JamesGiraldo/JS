'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1:27017/portafolio')
        .then(() =>{
          console.log("Coneccion La Base de datos Establecida con MongoDB");
          // creacion del servidor
          app.listen(port, () => {
            console.log("Servidor Andando");
          });

        })
        .catch(err => console.log(err));
