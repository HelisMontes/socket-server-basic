// Configuracion de Express
const express = require('express');
const app = require('express')();
// Servidor de Sockets
const server = require('http').createServer(app);
// Configuracion del socket server
const io = require('socket.io')(server);

//Desplegar el directorio publico
app.use( express.static(__dirname + '/public'));

io.on('connection', (socket) => { 
  // socket.emit('mensaje-bienvenida', {
  //   msg: 'Bienvenido al server',
  //   fecha: new Date()
  // })
  socket.on('message-to-server', (data) => { 
    console.log(data);

    // socket sirve para emitir un mensaje al mismo usuario que lo disparo
    //socket.emit('message-from-server', data);
    
    // io sirve para emitir un mensaje a todos los clientes que estén conectados bajo el mismo dominio
    io.emit('message-from-server', data);
  });
});

server.listen(8080,() => {
  console.log('Servidor corriendo en http://localhost:8080/');
}); 