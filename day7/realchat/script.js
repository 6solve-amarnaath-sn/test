const socket = new WebSocket("ws://localhost:8080");

const chatBox = document.getElementById("chatBox");

socket.onmessage = event => {
  const data = JSON.parse(event.data);

  const msg = document.createElement("div");
  msg.textContent = `${data.username}: ${data.message}`;
  chatBox.appendChild(msg);

  chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  if (username && message) {
    const chatData = {
      username: username,
      message: message,
      time: new Date().toLocaleTimeString()
    };

    socket.send(JSON.stringify(chatData));
    document.getElementById("message").value = "";
  }
}
