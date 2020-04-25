'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mes = fecha.getMonth();
var dia = fecha.getDate();
var hora = fecha.getHours();
var textoHora = `
  El Año es: ${year}
  El Mes Es: ${mes}
  El Dia Es: ${dia}
  La Hora es: ${hora}
`;
console.log(textoHora);

//opereciones  javascript math object
console.log(Math.ceil(Math.random()*10));
