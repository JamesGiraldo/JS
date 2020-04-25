$(document).ready(function(){
  // Load
  //var datos = $('#datos').load("https://reqres.in/");
  //GET Y POST
  // var usuarios = $.get("https://resqres.in/api/users?page=2" , function(response) {
  //   console.log(response);
  // });
  var datos = $('#datos');
  $.get( "https://reqres.in/api/users" , {page: 2} , function(response) {
    response.data.forEach((element, index) => {
      datos.append("<p>"+element.first_name+ " " + element.last_name+"</p>");
    });
  });
  
  $('#formulario').submit(function(e) {
    e.preventDefault();
    var usuario = {
      nombre: $('input[name="name"]').val(),
      web: $('input[name="web"]').val()
    }
    $.post( $(this).attr("action") , usuario , function(response) {
        datos.append("<p>"+usuario.nombre+ " " + usuario.web+"</p>");
    }).done(function() {
      alert("Usuario Añadido Correctamente");
    });
    //JQUERY CON AJAX
    // $.ajax({
    //   type: 'POST',
    //   // dataType: 'json',
    //   // contentType: 'application/json',
    //   url: $(this).attr("action"),
    //   data: usuario,
    //   beforeSend: function() {
    //     console.log("Enviando usuario...");
    //   },
    //   success: function(response) {
    //     console.log(response);
    //   },
    //   error: function() {
    //     console.log("A Ocurrido Un error.!");
    //   },
    //   timeout: 1000
    // });
    return false;
  });
});
