'use strict'

/* localStorage Comprobar disponibilidad
if (typeof(Storage) !== 'undefined' ) {
  console.log("LocalStorage Disponible");
}else {
  console.log("LocalStorage No esta Disponible");
}*/

localStorage.setItem("tutulo", "Curso de Udemy Js");

// Recuperar elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//GUardar objetos

var usuario = {
  nombre: "JAMES GIRALDO",
  email: "JAmesgiiraldo@gmail.com",
  web: "jamesgiraldo"
};

localStorage.setItem("usuario", JSON.stringify(usuario));

//recuperar objetos

var userjs = JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#datos").append( userjs.web+ " - " + userjs.nombre);
//borra
localStorage.removeItem("usuario");
//limpiar
localStorage.clear();
