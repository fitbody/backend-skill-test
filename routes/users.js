const { Router } = require("express");
const { check } = require("express-validator");
const { validateFields } = require("../middlewares/validation-field");
const {
  usersGet,
  userGet,
  usersPost,
  usersDelete,
  usersPatch,
} = require("../controllers/users");

const route = Router();

route.get("/", usersGet);
route.post(
  "/",
  [
    check("name", "name is required").not().isEmpty(),
    validateFields,
  ],
  usersPost
);
route.get("/:id", userGet);
route.delete("/:id", usersDelete);
route.patch("/:id", usersPatch);

module.exports = route;
