$(document).ready(function(){
    $(document).tooltip();
    //Slider
    if (window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
         mode: 'fade',
         captions: true,
         autoControls: true,
         slideWidth: 1200,
         responsive: true,
         pager: false
       });
    }
    //Selector de temas
    var btnSwitch = $('#boton');
    btnSwitch.click(function(){
      document.body.classList.toggle('dark');
      if(document.body.classList.contains('dark')){
        localStorage.setItem('dark-mode', 'true');
      }else {
        localStorage.setItem('dark-mode', 'false');
      }
    });
    if (localStorage.getItem('dark-mode') === 'true') {
      document.body.classList.add('dark');      
    }else {
      document.body.classList.remove('dark');
    }
    //TRES TEMAS Que No se guardan en localStorage
    /* var theme = $('#theme');
    $('#to-green').click(function() {
      theme.attr("href","css/green.css");
    });
    $('#to-red').click(function() {
      theme.attr("href","css/red.css");
    });
    $('#to-blue').click(function() {
      theme.attr("href","css/blue.css");
    }); */
   //POST
   if (window.location.href.indexOf('index') > -1){
     var posts = [
       {
         title: 'Prueba de titulo 1',
         date: moment().format('LLL'),
         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
       },
       {
         title: 'Prueba de titulo 2',
         date: moment().format('LLL'),
         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
       },
       {
         title: 'Prueba de titulo 3',
         date: moment().format('LLL'),
         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
       },
       {
         title: 'Prueba de titulo 4',
         date: moment().format('LLL'),
         content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
       },
     ];
     posts.forEach((item, index) => {
       var post = `
       <article class="post" id="post">
         <h2> ${item.title} </h2>
         <span class="date"> ${item.date} </span>
         <p> ${item.content} </p>
         <button type="button" class="buttom-more" name="button">Leer más</button>
       </article>
       `;
       $('#posts').append(post);
     });
   }
   //Scroll arriba de la web
   $('.subir').click(function(e){
     e.preventDefault();
     $('body, html').animate({
         scrollTop: 0
       }, 400);
       return false;
    });
    //login Falso
    $('.login .FORM').submit(function() {
      var form_name = $('#form_name').val();
      localStorage.setItem('form_name',form_name);
    });
    var form_name = localStorage.getItem('form_name');
    if (form_name != null && form_name != "undefined"){
      var about_parrafo = $('#about .P');
      about_parrafo.html("<br><strong>"+form_name+ "</strong>&nbsp;");
      about_parrafo.append("<a href='#'id='logout'>Cerrar Sesíon</a>");
      $('.login').hide();
      $('#logout').click(function() {
        localStorage.clear();
        location.reload();
      });
    }
    //Acordeon
    if (window.location.href.indexOf('about') > -1){
      $('#acordeon').accordion();
    }
    //RELOJ
    if (window.location.href.indexOf('reloj') > -1){
      setInterval(function(){
        var reloj = moment().format("hh:mm:ss");
        $('#reloj').html(reloj);
      }, 1000);
    }
    //Validacion from
    if (window.location.href.indexOf('contact') > -1){
      $("form input[name='date']").datepicker({
        dateFormat: 'dd-mm-yy'
      });
      $.validate({
        lang: 'es'
      });
    }
});
