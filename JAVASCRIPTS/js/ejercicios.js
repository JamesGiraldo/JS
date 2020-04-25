'use strict'

var formulario = document.querySelector('#formulario');
var box_dashed = document.querySelector('#dashed');
box_dashed.style.display = "none";
//EVENTO SUBMIT
  formulario.addEventListener('submit', function() {
    console.log("Evento Submit capturado");

    var nombre = document.querySelector('#nombre').value;
    var apellido = document.querySelector('#apellido').value;
    var edad = parseInt(document.querySelector('#edad').value);
    if (nombre.trim() == null || nombre.trim().length == 0) {
      document.querySelector('#error_nombre').innerHTML = "El nombre No Es Valido";
      return false;
    }else {
      document.querySelector('#error_nombre').style.display = "none";
    }
    if (apellido.trim() == null || apellido.trim().length == 0) {
      document.querySelector('#error_apellido').innerHTML = "El Apellido No Es Valido";
      return false;
    }else {
      document.querySelector('#error_apellido').style.display = "none";
    }
    if (edad == null || edad <= 0 || isNaN(edad)) {
      document.querySelector('#error_edad').innerHTML = "La Edad No Es Valida";
      return false;
    }else {
      document.querySelector('#error_edad').style.display = "none";
    }

    box_dashed.style.display = "block";
    var n_nombre = document.querySelector("#n_nombre span");
    var p_apellido = document.querySelector("#p_apellidos span");
    var e_edad = document.querySelector("#e_edad span");

    n_nombre.innerHTML = nombre;
    p_apellido.innerHTML = apellido;
    e_edad.innerHTML = edad;
    // var datos_usuario = [nombre , apellido, edad];
    // var indice;
    // for (indice in datos_usuario) {
    //   var parrafo = document.createElement("p");
    //   parrafo.append(datos_usuario[indice]);
    //   box_dashed.append(parrafo);
    // }
  });
