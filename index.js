const Server = require ('./models/server');

const server = new Server();

server.execute();

// io.on('connection', (socket) => { 
//   // socket.emit('mensaje-bienvenida', {
//   //   msg: 'Bienvenido al server',
//   //   fecha: new Date()
//   // })
//   socket.on('message-to-server', (data) => { 
//     console.log(data);

//     // socket sirve para emitir un mensaje al mismo usuario que lo disparo
//     //socket.emit('message-from-server', data);
    
//     // io sirve para emitir un mensaje a todos los clientes que estén conectados bajo el mismo dominio
//     io.emit('message-from-server', data);
//   });
// });
