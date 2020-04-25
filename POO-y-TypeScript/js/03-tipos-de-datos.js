//String
var cadena = "JAMES";
cadena = 44;
//Number
var numero = 12;
//Boolean
var verdadero_falso = true;
//Any -->cualquier cosa
var cualquiera = "Hola";
cualquiera = 77;
//Array
var lenguajes = ["PHP", "JS", "CSS", "HTML", "RUBY"];
var years = [12, 13, 14, 15, 16, 17];
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
//let es para bloques
//var es para global
//let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
}
console.log(numero1, numero2);
