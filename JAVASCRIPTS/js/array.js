'use strict'

/* EJERCICIO
  programa que pida 6 muneros por pantalla y los meta en un ARRAY
  mostrar el array son sus elementos  en la pagina y consola
  ordenar y mostrar
  invertir el orden y mostrarlo
  mostrar cuantos elementos tiene el ARRAY
  busqueda de un valor introducido por el usuario y que diga si esta o no ademas la posision del indice
*/
function mostrarArray(elementos, textCuston = ""){
  document.write("<h1>Contenido del array "+ textCuston +"</h1>");
  document.write("<ul>")
  elementos.forEach((elemento, id) => {
    document.write("<li>"+elemento+"</li>");
  });
  document.write("</ul>")
}
// var numeros = new Array(6);
var numeros = [];
for (var i = 0; i <= 5; i++) {
  // numeros[i] = parseInt(prompt("Introduca un numero ", 0));
  numeros.push(parseInt(prompt("Introduca un numero ", 0)));
}
//en pantalla
mostrarArray(numeros);
//en Consola
console.log(numeros);
//ordenar y mostrar
numeros.sort(function(a,b){return a-b});
mostrarArray(numeros, "Ordenado");
//invertir y mostrar
numeros.reverse();
mostrarArray(numeros,"invertidos");
//contar elementos del ARRAY
document.write("<h1>Contenido del array "+numeros.length +"</h1>");
//buscar
var busqueda = parseInt(prompt("Busca un numero ", 0));
var posision = numeros.find(numero => numero == busqueda);
if (posision && posision != -1 ) {
  document.write("<h1>Encontrado</h1>");
  document.write("<h1>posision de la busqueda es: "+posision +"</h1>");
}else {
  document.write("<h1>NO Encontrado</h1>");
}

//ARARY, arreglos, matrices
// var nombre = "James Giraldo";
// var nombres = ["JAMES","ANDRES","GIRALDO","ESCORCIA",52, true];
//
// var lenguajes = new Array("PHP","JS","GO","JAVA");

// var elemento = parseInt(prompt("que elemento del array quieres",0));
// if (elemento >= nombres.length ) {
//     alert("Introduce el numero menor que: "+nombres.length);
// }else {
//   alert("El Usuario Seleccionado es " +nombres[elemento]);
// }
// document.write("<h1>Lenguajes de programacion Del 2020</h1>");
// document.write("</ul>");
// for (var i = 0; i < lenguajes.length; i++) {
//   document.write("<li>"+lenguajes[i]+"</li>");
// }
// document.write("<ul>");

//forEach Array
// document.write("<h1>Lenguajes de programacion Del 2020</h1>");
// document.write("</ul>");
// // lenguajes.forEach((elemento) => {
// //    document.write("<li>"+elemento+"</li>");
// // });
// document.write("<ul>");

//busqueda en un ARRAY
// var precios = [10,20,80,50,12];
// var busqueda = precios.some(precio => precio >= "20");

// var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
// console.log(busqueda);
// document.write("<h1>Lenguajes de programacion Del 2020</h1>");
// document.write("</ul>");
// for (let lenguaje in lenguajes ){
//   document.write("<li>"+lenguajes[lenguaje]+"</li>");
// }
// document.write("<ul>");

//ARRAY  multidimencional
// var categorias = ["Terror","COMEDIA","Accion", "DRAMA" , "AMOR"];
// var peliculas = ["LA verdad duele", "la vida es vella"];
// peliculas.reverse();
// console.log(peliculas);
// var cine = [categorias,peliculas];
// // console.log(cine);
// /*
// var elemento = "";
// do {
//   elemento = prompt("introduce otro elemento");
//   peliculas.push(elemento);
// }while (elemento != "ACABAR");
// peliculas.pop(); */
//
// // var indice = peliculas.indexOf("la vida es vella");
// // if (indice > -1 ) {
// //   peliculas.splice(indice,1);
// // }
//
// var peliculasString =peliculas.join();
// var cadena = "text1, text2, text3";
// var cadena_array = cadena.split(", ");
// console.log(cadena_array);
