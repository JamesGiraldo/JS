var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

app.get('/hola-mundo', function(req, res){
    res.status(200).send('Hola Mundo Desde Esta Ruta');
});

var messages = [{
  id: 1,
  text: "Bienvenido Al Chat Privado de Socket.io Y Node Js De James Giraldo...",
  nickname: "Bot - Jamesgiiraldo@gmail.com"
}];

io.on('connection', function(socket){
      console.log("El Node Con IP: "+ socket.handshake.address+" Se Ha Conectado..");

      socket.emit('messages', messages);
      socket.on('add-message', function(data){
          messages.push(data);
          io.sockets.emit('messages', messages);
      });

});

server.listen(6677, function(){
  console.log("Servidor Esta Funcionando en http://localhost:6677");
});
