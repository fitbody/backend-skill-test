const router = require("express").Router()
const {
  createTodo,
  getTodos,
  deleteTodo,
  getTodo,
  isCompleted,
} = require("../controllers/todo")
const { isAuth } = require("../middlewares/isAuth")

router.post("/create", isAuth, createTodo)
router.get("/todos", isAuth, getTodos)
router.get("/info/:id", isAuth, getTodo)
router.post("/delete", isAuth, deleteTodo)
router.post("/completed", isAuth, isCompleted)
module.exports = router
