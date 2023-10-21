const userController = require("../controller/user.controller");

module.exports = function (io) {
  //io ~~~~
  io.on("connection", async (socket) => {
    console.log("client is connected", socket.id);

    socket.on("login", async (userName, cb) => {
      // 유저정보를 저장
      const user = userController.saveUser(userName, socket.id);
    });

    socket.on("disconnect", () => {
      console.log("user is disconnected");
    });
  });
};
