const { response } = require("express");

const tasksGet = (req, res, next) => {
  res.json({
    message: "todo esta chido en el get",
  });
};
const tasksPost = (req, res, next) => {
  res.json({
    message: "todo esta chido en el post",
  });
};
const tasksPut = (req, res, next) => {
  res.json({
    message: "todo esta chido en el put",
  });
};
const tasksDelete = (req, res, next) => {
  res.json({
    message: "todo esta chido en el delete",
  });
};
const tasksPatch = (req, res, next) => {
  res.json({
    message: "todo esta chido en el patch",
  });
};

module.exports = {
  tasksGet,
  tasksPost,
  tasksPut,
  tasksDelete,
  tasksPatch
};
