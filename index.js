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
  socket.emit('mensaje-bienvenida', {
    msg: 'Bienvenido al server',
    fecha: new Date()
  })
});

server.listen(8080,() => {
  console.log('Servidor corriendo en http://localhost:8080/');
}); 