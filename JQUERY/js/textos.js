$(document).ready(function(){
  //para contar cuantos elementos ahi en la paguina console.log($('a').length);
  reloadLinks();
  $('#add_boton')
    .removeAttr('disabled')
    .click(function(){
    $('#menu').prepend('<li><a href="'+$('#add_link').val()+'"></a></li>');
    $('#add_link').val('');
    reloadLinks();
  });
});
function reloadLinks(){
  $('a').each(function(index){
    var that = $(this);
    var enlace = ($(this).attr("href"));
    that.attr('target', '_blank');
    that.text(enlace);
  });
}
