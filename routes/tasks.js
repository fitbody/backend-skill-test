const { Router } = require("express");
const {
  tasksGet,
  tasksPost,
  tasksPut,
  tasksDelete,
  tasksPatch,
} = require("../controllers/tasks");

const route = Router();

route.get("/", tasksGet);
route.post("/", tasksPost);
route.put("/", tasksPut);
route.delete("/", tasksDelete);
route.patch("/", tasksPatch);

module.exports = route;
