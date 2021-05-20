const Task = require("../models/tasks");
const User = require("../models/user");

User.hasMany(Task);
Task.belongsTo(User);
