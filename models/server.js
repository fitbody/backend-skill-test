const express = require("express");
const cors = require("cors");
const sequelize = require("../db/db");
require("../db/associations");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 8080;
    this.tasksPath = "/api/tasks";
    this.usersPath = "/api/users";
    this.middleware();
    this.routers();
  }

  middleware() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
  }

  routers() {
    this.app.use(this.tasksPath, require("../routes/tasks"));
    this.app.use(this.usersPath, require("../routes/users"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Server on port", this.port);
      sequelize
        .sync({ force: false })
        .then(() => {
          console.log("Connection sqlite has been established successfully.");
        })
        .catch((err) => {
          console.error("Unable to connect to the database:", err);
        });
    });
  }
}

module.exports = Server;
