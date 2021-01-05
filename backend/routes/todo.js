const router = require("express").Router()
const { createTodo, getTodos, deleteTodo, getTodo } = require("../controllers/todo")
const { isAuth } = require("../middlewares/isAuth")

router.post("/create",isAuth, createTodo)
router.get("/todos", isAuth, getTodos)
router.get("/info/:id", isAuth, getTodo)
router.get("/delete", isAuth, deleteTodo)
module.exports = router
