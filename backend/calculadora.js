'use-strict'

var params = process.argv.slice(2);

var numero1 = parseFloat(params[0]);
var numero2 = parseFloat(params[1]);
var platilla = `
    La Suma Es: ${numero1 + numero2}
    La Resta Es: ${numero1 - numero2}
    La Multiplicacion Es: ${numero1 * numero2}
    La Divicion Es: ${numero1 / numero2}
`;
console.log(platilla);
