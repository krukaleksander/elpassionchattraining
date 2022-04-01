import { Server } from "socket.io";

export function setupHandlers(io: Server) {
  io.on("connection", (socket) => {
    let current: string;
    console.log("WOOHOO");
    socket.emit("WELCOME MESSAGE", `User ${socket.id} Connected`);
    socket.on("new-message", ({ msg, activeRoom }) =>
      socket.broadcast.to(activeRoom).emit("new-message-from-server", msg)
    );
    socket.on("join-room", (room: string) => {
      if (current) socket.leave(current);
      socket.join(room);
      current = room;
    });
  });
}
