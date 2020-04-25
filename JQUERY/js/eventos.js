$(document).ready(function() {
  //efectos o eventos hover MOUSEOVER mouseout
  var caja = $('#caja');
  caja.mouseover(function() {
    $(this).css("background","red");
  });
  caja.mouseout(function() {
    $(this).css("background","green");
  });
  //Evento LLamado HOVER
  function cambiaRojo() {
    $(this).css("background","red");
  }
  function cambiaVerde() {
    $(this).css("background","green");
  }
  caja.hover(cambiaRojo,cambiaVerde);
  //click, Doble click
  caja.click(function() {
    $(this).css("background", "blue")
           .css("color", "white");
  });
  caja.dblclick(function() {
    $(this).css("background", "pink")
           .css("color", "yellow");
  });
  //Focus y blur
  var nombre = $('#nombre');
  var datos = $('#datos');
  nombre.focus(function() {
    $(this).css("border", "2px solid green");
  });
  nombre.blur(function() {
    $(this).css("border" , "1px solid #ccc");
    datos.text($(this).val()).show();
  });
  //eventos Mousedown Y Mouseup
  datos.mousedown(function() {
    $(this).css("border-color" , "gray");
  });
  datos.mouseup(function() {
    $(this).css("border-color" , "back");
  });
  //MOUSE Move
  var sigueme = $('#sigueme');
  $(document).mousemove(function() {
    $('body').css("cursor","none");
    sigueme.css("left",event.clientX)
           .css("top",event.clientY);
  });
});
