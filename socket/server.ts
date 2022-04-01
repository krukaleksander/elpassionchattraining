import { Server } from "socket.io";

export function setupHandlers(io: Server) {
  io.on("connection", (socket) => {
    socket.emit("WELCOME MESSAGE", `User ${socket.id} Connected`);
    socket.on("new-message", ({ msg, activeRoom }) =>
      socket.broadcast.to(activeRoom).emit("new-message-from-server", msg)
    );
    socket.on("join-room", (room: string) => {
      socket.join(room);
    });
    socket.on("leave-room", (room: string) => {
      socket.leave(room);
    });
  });
}
