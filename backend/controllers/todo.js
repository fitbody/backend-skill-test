const Todo = require("../models/Todo")

exports.createTodo = async (req, res) => {
  const { description } = req.body
  if (!description || description === "")
    res.status(500).json({ err: "Please provide a description!" })
  const createdBy = req.user._id
  const todo = await Todo.create({
    createdBy,
    description,
  })
  console.log(todo)
  res.status(200).json(todo)
}

exports.deleteTodo = async (req, res) => {
  const { _id } = req.body
  console.log("id t delete: ", req.body)
  await Todo.findByIdAndDelete(_id)
  res.status(200).json({ message: "Todo deleted successfully" })
}
exports.getTodos = async (req, res) => {
  const { _id } = req.user
  const todos = await Todo.find()
  res.status(200).json(todos)
}
exports.getTodo = async (req, res) => {
  const { id } = req.params
  const todo = await Todo.findById(id)
  res.status(200).json(todo)
}

exports.isCompleted = async (req, res) => {
  const { id, completed } = req.body
  console.log(id, completed)
  const isCompleted = await Todo.findByIdAndUpdate(id, {
    completed: !completed
  })
  // console.log(isCompleted)
}
