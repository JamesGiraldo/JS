$(document).ready(function(){
  var caja = $('#caja');
  $('#mostrar').hide();
  $("#mostrar").click(function(){
    $(this).hide();
    $('#ocultar').show();
    caja.fadeIn('slow'); //slideDown
  });
  $("#ocultar").click(function(){
    $(this).hide();
    $('#mostrar').show();
    caja.slideUp('slow', function() {
      console.log("Se Oculto Correctamente");
    });
  });
  $('#todoenuno').click(function() {
    caja.fadeToggle('fast');
  });
  //animaciones personalizadas
  $('#animame').click(function(){
    animacion();
  });
});
var caja = $('#caja');
function animacion() {
  caja.animate({marginLeft: '500px',
                fontsize: '40px',
                height: '110px'
                }, 'slow')
                .animate({
                  borderRadius: '900px',
                  marginTop: '80px'
                },'slow')
                .animate({
                  borderRadius: '0px',
                  marginTop: '0px',
                }, 'slow')
                .animate({
                  borderRadius: '0px',
                  marginTop: '0px',
                }, 'slow')
                .animate({
                  marginLeft: '500px',
                  fontsize: '40px',
                  height: '110px'
                }, 'slow');
}
