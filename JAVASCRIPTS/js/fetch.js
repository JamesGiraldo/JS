'use strict'
//Fetch  (AJAX) y peticiones a servicios / APIS REST
var div_usuarios = document.querySelector("#usuarios");
var div_profesor = document.querySelector("#profesor");
var div_jannet = document.querySelector("#jannet");

var usuarios = [];
getUsuarios()
  .then(data => data.json())
  .then(users => {
    listadoUsuario(users.data);
    return getInfo();
  })
  .then(data => {
    div_profesor.innerHTML = data;
    return getJannet();
  })
  .then(data => data.json())
  .then(user => {
    mostrarJanet(user.data);
  })
  .catch(error => {
    alert("Error Con Las peticiones");
  });

function getUsuarios() {
    return fetch('https://reqres.in/api/users');
}
function getJannet() {
    return fetch('https://reqres.in/api/users/2');
}
function getInfo(){
  var profesor = {
    nombre: 'Henry',
    apellidos: 'Gusman',
    url: 'HenryCucho@fleteo.co'
  };
  return new Promise((resolve, reject) => {
    var profesor_string = "";
    setTimeout(function(){
        profesor_string = JSON.stringify(profesor);
      if (typeof profesor_string != 'string' || profesor_string == '')return reject('error');

      return resolve(profesor_string);
    }, 1000);
  });
}
function listadoUsuario(usuarios){
  usuarios.map((user, i) =>{
    let nombre = document.createElement('h3');
    nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
    div_usuarios.appendChild(nombre);
    document.querySelector("#loading").style.display = "none";
  });
}
function mostrarJanet(user){
    let nombre = document.createElement('h4');
    let avatar = document.createElement('img');
    nombre.innerHTML = " " + user.first_name + " " + user.last_name;
    avatar.src = user.avatar;
    avatar.width = '100';
    div_jannet.appendChild(nombre);
    div_jannet.appendChild(avatar);
    document.querySelector("#jannet #loading").style.display = "none";
}
