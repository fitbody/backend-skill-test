const { Router } = require("express");
const {
  tasksGet,
  taskGet,
  tasksPost,
  tasksDelete,
  tasksPatch,
} = require("../controllers/tasks");

const route = Router();

route.get("/", tasksGet);
route.post("/", tasksPost);
route.get("/:id", taskGet);
route.delete("/:id", tasksDelete);
route.patch("/:id", tasksPatch);

module.exports = route;
