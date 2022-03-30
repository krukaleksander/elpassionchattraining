import { Server } from "socket.io";

export function setupHandlers(io: Server) {
  io.on("connection", (socket) => {
    console.log("WOOHOO");
    socket.emit("WELCOME MESSAGE", "Connected");
  });
}
