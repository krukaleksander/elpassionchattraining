import { Server } from "socket.io";

export function setupHandlers(io: Server) {
  io.on("connection", (socket) => {
    console.log("WOOHOO");
    socket.emit("WELCOME MESSAGE", `User ${socket.id} Connected`);
    socket.on("new-message", (msg) =>
      socket.broadcast.to("general").emit("new-message-from-server", msg)
    );
  });
}
