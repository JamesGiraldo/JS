$(document).ready(function(){
  //Mover Elemento Por La Paguina
  $('.elemento').draggable();
  //redimencionar elementos
  $('.elemento').resizable();
  //Seleccionar Elementos y ordenar
  // $('.lista-seleccionable').selectable();
  $('.lista-seleccionable').sortable({
    update: function(event, ui) {
      console.log("ha cambiado la lista");
    }
  });
  //Drop
  $('#elemento-movido').draggable();
  $('#area').droppable({
    drop: function() {
      console.log("Haz Soltado Algo dentro del area");
    }
  });
  //efectos
  $('#mostrar').click(function() {
    $('.caja-efectos').toggle("scale");
  });
  $(document).tooltip();
  //dialog
  var boton = $('#lanzar');
  boton.click(function() {
    $('#popup').dialog();
  });
  //datepicker
  $('#calendario').datepicker();
  //tabs
  $('#pestanas').tabs();
});
