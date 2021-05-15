const Sequelize = require("Sequelize");
const sequelize = require("../db/config");

const Task = sequelize.define("task", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
    validate: {
      notEmpty: true,
      isBoolean: (val) => {
        if (typeof val !== "boolean") {
          throw new Error("Not boolean.");
        }
      },
    },
  },
});

module.exports = Task;
