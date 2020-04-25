'use strict' //JSON javascript Object Notation

var pelicula = {
  titulo: "Batman Inicia",
  year: 2017,
  pais: "Estados Unidos"
};
var peliculas = [
  { titulo: "La Verdad Duele",
    year: 2016,
    pais: "France"},
];
var caja_peliculas = document.querySelector('#peliculas');
var index;
for (index in peliculas) {
  var parrafo = document.createElement("p");
  parrafo.append(peliculas[index].titulo + "  -  " + peliculas[index]);
  caja_peliculas.append(parrafo);
}
