'use strict'

/* CALCULADORA
  -que pida numeros por pantalla
  -Valide uno mal que nos lo vuelva a pedir
  -que nos muestre el resultado
*/
// var numero1 = parseInt(prompt("Introduce el primer numero" , 0));
// var numero2 = parseInt(prompt("Introduce el segundo numero" , 0));
// while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
//   numero1 = parseInt(prompt("Introduce el primer numero" , 0));
//   numero2 = parseInt(prompt("Introduce el segundo numero" , 0));
// }
// var resultado = " La Suma es: "+(numero1+numero2)+"<br />"+
//               " La Resta Es:"+(numero1-numero2)+"<br />"+
//               " La Multiplicacion Es:"+(numero1*numero2)+"<br />"+
//               " La Divicion Es:"+(numero1/numero2)+"<br />";
// var resultadoALERT = " La Suma es: "+(numero1+numero2)+" \n"+
//                 " La Resta Es:"+(numero1-numero2)+" \n"+
//                 " La Multiplicacion Es:"+(numero1*numero2)+" \n"+
//                 " La Divicion Es:"+(numero1/numero2)+" \n";
// document.write("El Resultado Es: "+resultado);
// alert(resultadoALERT);
// console.log(resultadoALERT);
/* EJERCICIO 7
  programa tabla de muntiplicar de un numero introduciodos por pantalla
*/

// var numero = parseInt(prompt("De Que numero quieres la tabla" , 1));
// document.write("<h1>La Tabla Del " + numero + "</h1>");
// for (var i = 1; i <= 12; i++) {
//   document.write(i+" x " +numero+ " = " +(i*numero)+"<br />");
// }
//
// /* TODAS LAS TABLAS DE MULTIPLICAR */
// for (var c = 1; c <= 12; c++) {
//   document.write("<h1>La Tabla Del " + c + "</h1>");
//   for (var i = 1; i <= 12; i++) {
//     document.write(i+" x " +c+ " = " +(i*c)+"<br />");
//   }
// }

/* EJERCICIO 6
  Programa nos diga si un numero es par o impar
  1. ventana prompt
  2. si no es valido que no pida de nuevo el numero
*/
// var numero = parseInt(prompt("Introduce el primer numero" , 1));
// while (isNaN(numero)) {
//   numero = parseInt(prompt("Introduce el primer numero" , 1));
// }
// if (numero % 2 == 0) {
//   alert("Es Un Numero PAR");
// }else {
//   alert(" Es Un Numero IMPAR");
// }

/* EJERCICIO 5
  programa mostrar todos los numeros divisores de un numero introduciodos en un prompt
*/
// var numero1 = parseInt(prompt("Introduce el primer numero" , 1));
// for (var i = 1; i <= numero1; i++) {
//   if (numero1%i == 0) {
//     console.log(" Divisor "+i);
//   }
// }

/* EJERCICIO 4
  programa mostrar todos los numeros impares que hay entres dos numeros introduciodos por el usuario
*/
// var numero1 = parseInt(prompt("Introduce el primer numero" , 0));
// var numero2 = parseInt(prompt("Introduce el Segundo numero" , 0));
// while (numero1 < numero2) {
//   numero1++;
//   if (numero1%2 != 0) {
//     console.log("El "+numero1+ " es Impar");
//   }
// }

// EJERCICIO 3
/*
  programa que muestre todos los numeros que esten entre los dos numeros que ingrese el usuario
*/
// var numero1 = parseInt(prompt("Introduce el primer numero" , 0));
// var numero2 = parseInt(prompt("Introduce el Segundo numero" , 0));
// document.write("<h1>De "+numero1+" a "+numero2+" Estan Estos Numeros:</h1>")
// for (var i = numero1; i <= numero2; i++) {
//   document.write(i+ " <br />");
// }

//EJERCICIO 2
/*
  programa ultilzando un bucle, mostrar la suma y la medida de los numeros insertados hasta
  introducir un numero negativo y ahi mostrar el resultado
*/
// var suma = 0;
// var contador = 0;
// do {
//   var numero = parseInt(prompt("Introsca Un numero hasta que metas uno negativo ", 0));
//   if (isNaN(numero)) {
//     numero = 0;
//   }else if(numero >= 0){
//     suma = suma + numero;
//     // suma += numero;
//     contador++;
//   }else {
//
//   }
//   console.log(suma);
//   console.log(contador);
// } while (numero >= 0);
//   alert(" La suma de todos los numeros es " + suma);
//   alert(" La media de todos los numeros es " + (suma/contador));

//EJERCICIO 1
/*
  programa que pida dos numeros y determine que si son iguales o no , si son mayor o menor uno del otro
  PLUS: Si los datos ingresados son letras o son menores ha 0 que vuelva ha pedir los datos(numero)
*/
// var numero1 = parseInt(prompt("Introduce el primer numero" , 0));
// var numero2 = parseInt(prompt("Introduce el segundo numero" , 0));
// while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
//   numero1 = parseInt(prompt("Introduce el primer numero" , 0));
//   numero2 = parseInt(prompt("Introduce el segundo numero" , 0));
// }
// if (numero1 == numero2) {
//   alert("Los Numeros Son Iguales");
// }else if(numero1 > numero2){
//   alert(" el numero mayor es " + numero1);
//   alert(" el numero menor es " + numero2);
// } else if(numero2 > numero1){
//   alert(" el numero mayor es " + numero2);
//   alert(" el numero menor es " + numero1);
// } else {
//   alert(" INTRODUCE UN NUMERO BURRA ");
// }

//ALERTAS
// alert("Esto Es Una Alerta");

//Confirmacion ALERTAS
// var mi_resultado = confirm("Estas Seguro de Esta ACCION.?");
// console.log(mi_resultado);

//INGRESO DE DATOS
// var mi_resultado = prompt("¿QUE EDAD TIENES?" , 18);
// console.log(mi_resultado);

// document.write("Hola mundo desde fichero Externo");
// alert("Hola Mundo Con Js");
// console.log('Muestra Esto en Consola');
// console.log(88+4);

//VARIABLES  VAR contenedor de informacion.!
// var pais = "Colombia";
// var continente = "America";
// var antiguedad =  pais+''+continente;
// alert(antiguedad);
// console.log(pais,continente,antiguedad);
// // LEF
// let prueba = "hola";
// alert(prueba);

// // Constante es como una variable pero el valor no cambia
// var web = "Brrr";
// const ip = "BEBESITA";
// web = "Anuelaso";
// console.log(web, ip);

//Operadores
// var numero1 = 7;
// var numero2 = 12;
// var resultado = numero1 * numero2;
// alert("el Resultado de la operacion es " + resultado);

//TIPOS DE DATOS
// var numero_entero = 44;
// var cadena_text = "Hola que Tal";
// var verdadero_o_falso = true;
// var numero_falso = "33";

// console.log(Number(numero_falso)+7);
// //detectar o imprimir el tipo de datos
// console.log(typeof numero_entero);
// console.log(typeof cadena_text);
// console.log(typeof verdadero_o_falso);
// console.log(typeof numero_falso);

//CONDICIONALES
/* operadores relacionales
 Mayor: >
 Menor: <
 Mayor o Igual: >=
 Menor o Igual: <=
 igual: ==
 Distinto: !=
*/

// var edad = 84;
// var nombre = "david";
// if (edad>=18) {
//   console.log(nombre + " Tiene " + edad + " Es Mayor De Edad");
//   if (edad <= 33) {
//     console.log(nombre + " Aun Eres Milenias");
//   }else if(edad >= 70){
//       console.log(nombre + " Eres Un Ansiano wey");
//   }else {
//     console.log(nombre + " ya no eres Milenia");
//   }
// }else {
//   console.log(nombre + " Tiene " + edad + " Es Menor De Edad");
// }
/* OPERADORES LOGICOS
  AND(Y): &&
  OR: ||
  Negacion: !
*/
//NEGACION
// var year = 2020;
// if (year != 2018) {
//   console.log("El Año es 2018 "+ year);
// }
// //AND
// if (year >= 2000 && year <= 2020) {
//   console.log("Estamos en la era actual wey  "+ year);
// } else {
//   console.log("cascado :v Somos PICAPIEDRAS "+ year);
// }
// //OR
// if (year == 2018 || (year == 2020 && year == 2028)) {
//   console.log("El año Acava en 2");
// }else {
//   console.log("VERGA El Año No esta Ni por ahi");
// }

// switch
// var edad = 25;
// var imprime = "" ;
// switch (edad ) {
//   case 18:
//       imprime = "Acabas de Cumplir La Mayoria De Edad";
//     break;
//   case 25:
//       imprime = " Eres Adulto";
//     break;
//   case 40:
//       imprime = "tas viejo";
//     break;
//   case 75:
//       imprime = "Mas Ansiano que nunca";
//     break;
//   default:
//     imprime = " Tu edad Es Neutra";
//     break;
// }
// console.log(imprime);

//BUCLE FOR es una estructura de control que se repite barias veces
// var numeros = 100;
// for (var i = 0; i < numeros; i++) {
//   // numeros[i]
//   console.log("Vamos por el Numero " + i);
//
//   // debugger;
// }

//BUCLE WHILE
// var year = 2020;
// while (year != 1991) {
//   console.log(year +" Estamos");
//
//   //DECREMENTO
//   year--;
//   //incremento
//   // year++;
// }

//Do While
// var year = 30;
// do {
//   alert("solo Cuando sea Diferente ah 20!");
//   year--;
// } while (year > 25);
