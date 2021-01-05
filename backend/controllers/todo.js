const Todo = require("../models/Todo")

exports.createTodo = async (req, res) => {
  const { description } = req.body
  if (!description) res.status(500).json({err: "Please provide a description!"})
  const createdBy = req.user._id
  await Todo.create({
    createdBy,
    description,
  })
  res.status(200).json({ message: "Todo created" })
}

exports.deleteTodo = async (req, res) => {
  const { id } = req.params
  await Todo.findByIdAndDelete(id)
  res.status(200).json({ message: "Todo deleted successfully" })
}
exports.getTodos = async (req, res) => {
  const { _id } = req.user
  const todos = await Todo.find()
  res.status(200).json( todos )
}
exports.getTodo = async (req, res) => {
  const {id} = req.params
  const todo = await Todo.findById(id)
  res.status(200).json( todo )
}

