'use strict'
// 
// // window.addEventListener('load', () => {
//   function intervalo(){
//     //tiempos timers
//     var tiempo = setInterval(function(){
//       console.log("set Intervalo iniciado");
//       var encabezado = document.querySelector('#titulo');
//       if (encabezado.style.fontSize == "50px"){
//         encabezado.style.fontSize = "30px";
//       }else{
//         encabezado.style.fontSize = "50px";
//       }
//     }, 1000);
//     return tiempo;
//   }
//   var tiempo = intervalo();
//   var stop = document.querySelector('#stop');
//   stop.addEventListener('click', function(){
//     alert("Has Detenido el intervalo blucle");
//     clearInterval(tiempo);
//   });
//   var star = document.querySelector('#star');
//   star.addEventListener('click', function(){
//     alert("Has Iniciado el intervalo blucle");
//     intervalo();
//   });
// // });
//
//
// //EVENTOS raton Mouse
// function cambiarColor(){
//   var bg = boton.style.background;
//   if (bg == "green" ) {
//       boton.style.background = "red";
//   }else {
//       boton.style.background = "green";
//   }
//   return true;
// }
// var boton = document.querySelector('#boton');
// //evento click
// boton.addEventListener('click', function(){
//   cambiarColor();
// });
//
// //Mouse Hover
// boton.addEventListener('mouseover', function(){
//   boton.style.background = "#000";
// });
// //Mouse out
// boton.addEventListener('mouseout', function(){
//   boton.style.background = "#fff";
// });
//
// //focus
// var input = document.querySelector('#campo_nombre');
// input.addEventListener('focus', function(){
//   console.log("[focus] Estas dentro del Input");
// });
// //blur
// input.addEventListener('blur', function(){
//   console.log("[blur] Estas Fuera Del input");
// });
// // Keydown
// input.addEventListener('keydown', function(event){
//   console.log("[keydown] Estas pulsando tecla dentro del input ", String.fromCharCode(event.keyCode));
// });
// //keypress
// input.addEventListener('keypress', function(event){
//   console.log("[keypress] teclaprecionada dentro del input ", String.fromCharCode(event.keyCode));
// });
// //keyup
// input.addEventListener('keyup', function(event){
//   console.log("[keyup] soltando la tecla dentro del input ", String.fromCharCode(event.keyCode));
// });
