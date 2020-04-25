'use strict'

var nombre = prompt("METE TU NOMBRE");
var apellido = prompt("METE TU Apellidos");

//var text = "mi nombre es " + nombre + " y mi apellido es " + apellido ;
var text = `
    <h1> Hola que tal </h1>
    <h3>Mis Nombres es: ${nombre}</h3>
    <h3>Mis Apellidos Son: ${apellido}</h3>

`;
document.write(text);
