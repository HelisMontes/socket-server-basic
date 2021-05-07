// Configuracion de Express
const express = require('express');
// Servidor de Sockets
const http  = require('http');
// Configuracion del socket server
const socketio  = require('socket.io');
const path  = require('path'); 


class Server {
  constructor (){
    this.app = express();
    this.port = 8080;
    
    // Http server
    this.server = http.createServer(this.app);

    // Configuracion de socket
    this.io = socketio(this.server,{/* Configuraciones */});
  }
  middlewares(){
    //Desplegar el directorio publico
    this.app.use( express.static (path.resolve(__dirname + '../public') ) );
  }
  execute(){
    //Inicializar Middleware
    this.middlewares();

    this.server.listen(this.port,() => {
      console.log(`Servidor corriendo en http://localhost:${this.port}/`);
    }); 
  }
}

module.exports = Server