const socket = io("ws://localhost:8080");

socket.on("message", (message) => {
  const el = document.createElement("li");
  el.innerText = message;
  document.querySelector("ul").appendChild(el);
});

document.querySelector("button").addEventListener("click", () => {
  const message = document.querySelector("input").value;
  socket.emit("message", message);
});
