import React, { useEffect, useState } from "react"
import {
  todosService,
  createService,
  deleteService,
  isCompletedService,
} from "../services/todo"
import { Link } from "react-router-dom"
import { useContextInfo } from "../hooks/context"
import { Form, Input, Button, Checkbox } from "antd"
import { toast } from "react-toastify"
import "./Todos.scss"

const Todos = () => {
  const [todos, setTodos] = useState([])
  const { user } = useContextInfo()
  useEffect(() => {
    async function getTodosFunc() {
      const { data: data } = await todosService()
      setTodos(data)
    }
    getTodosFunc()
  }, [])
  const submitHandle = (value) => {
    if (!value.description)
      return toast.error("Please provide a description for your task!")
    console.log(value.description)
    createService(value)
      .then((res) => {
        setTodos((todos) => [...todos, res.data])
        toast.success("Todo added sucessfully!")
      })
      .catch((err) => console.log(err))
  }

  const deleteHandle = (value) => {
    deleteService(value)
      .then((res) => {
        setTodos(todos.filter((todo) => todo._id !== value._id))
        toast.warning("Todo deleted sucessfully!")
      })
      .catch((err) => console.log("error!"))
  }
  const onChangeHandle = (e) => {
    console.log(`checked = ${e.target.checked}`)
  }

  const isCheckedHandle = (id, completed) => {
    console.log(id, completed)
    isCompletedService({ id, completed })
      .then((res) => {
        setTodos(todos.filter((todo) => todo._id !== res.data._id))
        setTodos((todos) => [...todos, res.data])
      })
      .catch((err) => console.log(err))
  }
  return (
    <div className="container">
      {user ? (
        <>
          {todos.length > 0 ? (
            <>
              <h1>Pending tasks</h1>
              {todos.map((todo) => (
                <div className="todo-element" key={todo._id}>
                  <Link to={`/todo/${todo._id}`}>
                    <li>{todo.description}</li>
                  </Link>
                  <div>
                    <Checkbox
                      defaultChecked={todo.completed}
                      onClick={() => isCheckedHandle(todo._id, todo.completed)}
                      onChange={onChangeHandle}
                    />
                    <i
                      onClick={() => deleteHandle(todo)}
                      className="fas fa-trash-alt"
                    ></i>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <h1>You have no todos yet</h1>
              
            </>
          )}
          <Form onFinish={submitHandle}>
                <Form.Item name="description">
                  <Input placeholder="Add todo" />
                </Form.Item>
                <Button block type="primary" htmlType="submit">
                  Add
                </Button>
              </Form>
        </>
      ) : (
        <h1>Log in to manage your todos!</h1>
      )}
    </div>
  )
}

export default Todos
