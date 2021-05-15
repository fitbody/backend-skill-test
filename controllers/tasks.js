const { response } = require("express");
const Task = require("../models/tasks");
const Tasks = require("../models/tasks");

const tasksGet = (req, res, next) => {
  Tasks.findAll({})
    .then((result) => res.json(result))
    .catch((err) => {
      res.status(412).json({
        message: err.message,
      });
    });
};

const taskGet = (req, res, next) => {
  Tasks.findOne({ where: {id: req.params.id} })
    .then((result) => res.json(result))
    .catch((err) => {
      res.status(412).json({
        message: err.message,
      });
    });
};
const tasksPost = (req, res, next) => {
  Task.create(req.body)
    .then((result) => res.json({ message: "successfull", result }))
    .catch((err) => {
      res.status(412).json({
        message: err.message,
      });
    });
};
const tasksDelete = (req, res, next) => {
  Task.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.json({ message: `Task id ${req.params.id} delete` });
    })
    .catch((err) => {
      res.status(412).json({
        message: err.message,
      });
    });
};
const tasksPatch = (req, res, next) => {
  Task.update(req.body, { where: {id: req.params.id} })
    .then(() => {
      res.json(`successful`);
    })
    .catch((err) => {
      res.status(412).json({
        message: err.message,
      });
    });
};

module.exports = {
  tasksGet,
  taskGet,
  tasksPost,
  tasksDelete,
  tasksPatch,
};
