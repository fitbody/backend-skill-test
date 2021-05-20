const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/db");

class User extends Model {}
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    sequelize,
    modelName: "user",
  }
);

module.exports = User;
