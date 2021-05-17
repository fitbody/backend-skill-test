const Sequelize = require("sequelize");

const sequelize = new Sequelize("db", "admin", "password", {
  dialect: "sqlite",
  storage: "db/db.sqlite",
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
