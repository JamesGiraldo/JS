$(document).ready(function() {
  //selectores
  //selector de ID
  $("#rojo").css("color","red");
  $("#amarillo").css("color","yellow");
  $("#verde").css("color","green");
  //Selectores de clases
  var mi_clase = $('.zebra').css("padding","5px");
  $('.sin_borde').click(function() {
    $(this).addClass('zebra');
  });
  //selectores Por Etiquetas
  var parrafos = $('p').css("cursor","pointer");
  parrafos.click(function() {
    var that = $(this);
    if (!that.hasClass('grande')){
        that.addClass('grande');
    }else {
        that.removeClass('grande');
    }
  });
  //SELECTORES POR ATRIBUTOS
  $('[title="GOOGLE"]').css("background","#ccc");
  $('[title="FACEBOOK"]').css("background","blue");
  //OTROS
  // $('p, a').addClass('margen-superior');
  var busqueda = $('#elemento2').parent().parent().find('.resaltado');
  console.log(busqueda);

});
