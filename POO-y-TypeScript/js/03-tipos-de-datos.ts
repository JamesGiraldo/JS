//Crear un tipo de datos
type alfanumericos = string | number;
//String
let cadena: alfanumericos = "JAMES";
cadena = 44;
//Number
let numero: number = 12;
//Boolean
let verdadero_falso: boolean = true;
//Any -->cualquier cosa
let cualquiera: any = "Hola";
cualquiera = 77;
//Array
var lenguajes: Array<string> =["PHP","JS","CSS","HTML","RUBY"];
let years: number[] = [12,13,14,15,16,17];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
//let es para bloques
//var es para global
//let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
  var numero1 = 44;
  var numero2 = 55;
  console.log(numero1,numero2);
}
console.log(numero1,numero2);
