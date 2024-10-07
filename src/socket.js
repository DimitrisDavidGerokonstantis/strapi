// @ts-ignore
const io = require("socket.io")(strapi.server.httpServer, {
  cors: {
    origin: "https://dimitris-gerokonstantis.web.app",
  },
});
module.exports = {
  getIO() {
    return io;
  },
};
