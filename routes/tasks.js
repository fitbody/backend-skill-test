const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validation-field");
const {
  tasksGet,
  taskGet,
  tasksPost,
  tasksDelete,
  tasksPatch,
} = require("../controllers/tasks");

const route = Router();

route.get("/", tasksGet);
route.post(
  "/",
  [
    check("description", "description is required").not().isEmpty(),
    check("userId", "userId is required").not().isEmpty(),
    validateFields,
  ],
  tasksPost
);
route.get("/:id", taskGet);
route.delete("/:id", tasksDelete);
route.patch("/:id", tasksPatch);

module.exports = route;
