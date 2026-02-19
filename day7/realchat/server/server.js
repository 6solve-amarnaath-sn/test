const WebSocket = require("ws");

const server = new WebSocket.Server({ port: 8080 });

server.on("connection", socket => {
  console.log("New client connected");

  socket.on("message", message => {
    const data = JSON.parse(message);

    // Broadcast message to all clients
    server.clients.forEach(client => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(data));
      }
    });
  });

  socket.on("close", () => {
    console.log("Client disconnected");
  });
});

console.log("WebSocket server running on ws://localhost:8080");
