const WebSocket = require("ws");

const PORT = 443;
//const PORT = process.env.PORT || 5000;
const wsServer = new WebSocket.Server({
  port: PORT,
});



wsServer.on("connection", function (socket) {
  // Some feedback on the console
  console.log("A client just connected");

  // Attach some behavior to the incoming socket
  socket.send("server says hi");
  socket.on("message", function (msg) {
    console.log("Received message from client: " + msg);
    //socket.send(msg);//echo
    var count = 0;

    // Broadcast that message to all connected clients
    wsServer.clients.forEach(function (client) {
      //client.send(msg,JSON);
      client.send(""+msg);
      //print(msg)
      console.log(count);
      count++;

    });
  });
});

console.log(new Date() + " Server is listening on port " + PORT);