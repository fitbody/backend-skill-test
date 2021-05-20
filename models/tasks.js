const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");

class Task extends Model {}
Task.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    done: {
      type: DataTypes.BOOLEAN,
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
  },
  {
    sequelize,
    modelName: "task",
  }
);

module.exports = Task;
