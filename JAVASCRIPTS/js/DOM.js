'use strict'  //DOM Document Object Model
// function cambiaColor(color){
//   caja.style.background = color;
// }
// // var caja = document.getElementById("micaja");
// var caja = document.querySelector("#micaja");
//     caja.style.background = "red";
//     caja.style.padding = "2px";
//     caja.style.color = "#fff";
//     caja.className =  "hola";
//
// console.log(caja);

// conseguir todos los elementos por sus etiquetas
var todosLodDivs = document.getElementsByTagName('div');
var contenidotext = todosLodDivs[1].textContent;
var secion = document.querySelector('#misecion');
var hr = document.createElement("hr");
var valor;
// todosLodDivs.forEach((valor, indice) => {
  for ( valor in todosLodDivs ) {
    if (typeof todosLodDivs[valor] == "string") {
      var parrafo =document.createElement("p");
      var text = document.createTextNode(todosLodDivs[valor].textContent);
      parrafo.append(text);
      seccion.append(parrafo);
    }
  }
  secion.append(hr);
// });

// console.log(contenidotext);
// conseguir todos los elementos por sus clases
var divAmarillo = document.getElementsByClassName('amarillo');
divAmarillo[0].style.background = "yellow";
var divRojos = document.getElementsByClassName('rojo');

var div;
for (div in divRojos) {
  if (divRojos[div].ClassName == "rojo") {
    divRojos[div].style.background = "red";
  }
}
//querySelector
var id = document.querySelector("#encabezadoP");
console.log(id);
