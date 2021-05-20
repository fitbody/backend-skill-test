const Users = require("../models/user.js");
const Tasks = require("../models/tasks");

const usersGet = (req, res, next) => {
  Users.findAll({})
    .then((result) => res.json(result))
    .catch((err) => {
      res.status(412).json({
        message: err.message,
      });
    });
};

const userGet = (req, res, next) => {
  Users.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: Tasks,
      },
    ],
  })
    .then((result) => res.json(result))
    .catch((err) => {
      res.status(412).json({
        message: err.message,
      });
    });
};

const usersPost = (req, res, next) => {
  Users.create(req.body)
    .then((result) => res.json({ message: "successfull", result }))
    .catch((err) => {
      res.status(412).json({
        message: err.message,
      });
    });
};

const usersDelete = (req, res, next) => {
  Users.destroy({ where: { id: req.params.id } })
    .then(() => {
      res.json({ message: `User id ${req.params.id} delete` });
    })
    .catch((err) => {
      res.status(412).json({
        message: err.message,
      });
    });
};

const usersPatch = (req, res, next) => {
  Users.update(req.body, { where: { id: req.params.id } })
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
  usersGet,
  userGet,
  usersPost,
  usersDelete,
  usersPatch,
};
