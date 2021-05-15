const Sequelize = require("sequelize");

const sequelize = new Sequelize("taksdb", "admin", "password", {
  dialect: "sqlite",
  storage: "db/task-db.sqlite",
});
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection sqlite has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync();

module.exports = sequelize;
