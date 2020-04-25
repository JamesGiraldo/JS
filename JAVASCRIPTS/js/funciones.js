'use strict'

// function holamundo(text){
//   var hola_mundo = "texto dentro de function";
//   console.log(text);
//   console.log(numero.toString());
//   console.log(hola_mundo);
// }
// var numero = 4;
// var text = "Hola Mundo Soy  una variable global";
// holamundo(text);

//FUNCIONES ANONIMAS ES UNA FUNCION QUE NO TIENE NOMBRE
// function sumame(numero1,numero2,sumaYmuestra, sumaPordos){
//   var sumar = numero1 + numero2;
//   sumaYmuestra(sumar);
//   sumaPordos(sumar);
//   return sumar;
// }
// sumame(5,7, dato => {
//   console.log("La Suma es: ", dato);
// },
// dato => {
//   console.log("La Suma por dos es: ", (dato*2));
// });

//PARAMETROS REST Y SPREAD
// function listadoFrutas(fruta1,fruta2, ...resto_frutas){
//   console.log("Fruta 1 "+fruta1);
//   console.log("fruta 2 "+fruta2);
//   console.log(resto_frutas);
// }
// listadoFrutas("Naranja","Pera","UVA","COCO","BRR");
//
// var frutas = ["Naranja","Pera"];
// listadoFrutas(...frutas,"UVA","COCO","BRR");

//FUNCIONES
/* Una Funcion es una agrupacion reutilizable de un conjunto de instrucciones*/
//DEFINIR funcion
// function porConsola(numero1,numero2){
//   console.log("suma: "+ (numero1+numero2));
//   console.log("resta: "+ (numero1-numero2));
//   console.log("multiplicacion: "+ (numero1*numero2));
//   console.log("divicion: "+ (numero1/numero2));
// }
// function porPantalla(numero1,numero2){
//   document.write("suma: "+ (numero1+numero2)+"<br />");
//   document.write("resta: "+ (numero1-numero2)+"<br />");
//   document.write("multiplicacion: "+ (numero1*numero2)+"<br />");
//   document.write("divicion: "+ (numero1/numero2)+"<br />");
// }
// function calculadora(numero1 , numero2, mostrar = false){
//   if (mostrar == false) {
//     porConsola(numero1, numero2);
//   }else {
//     porPantalla(numero1, numero2);
//   }
//   return true;
// }
// console.log(calculadora(1,4,true));
// console.log(calculadora(12,8));
/*for (var i = 0; i <= 10; i++) {
  console.log(i);
  calculadora(i, 8);
}*/
