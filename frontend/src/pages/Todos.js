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
    createService(value)
      .then((res) => {
        setTodos((todos) => [...todos, res.data])
      })
      .catch((err) => console.log(err))
  }

  const deleteHandle = (value) => {
    deleteService(value)
      .then((res) => {
        console.log("todo deleted:D")
        setTodos(todos.filter((todo) => todo._id !== value._id))
      })
      .catch((err) => console.log("error!"))
  }
  const onChangeHandle = (e) => {
    //   console.log(id, completed)
    console.log(`checked = ${e.target.checked}`)
  }

  const isCheckedHandle = (id, completed) => {
    console.log(id, completed)
    isCompletedService({id, completed})
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }
  return (
    <>
      {user ? (
        <>
          {todos.length > 0 ? (
            <>
              {todos.map((todo) => (
                <div key={todo._id}>
                  <Link to={`/todo/${todo._id}`}>
                    <li>{todo.description}</li>
                  </Link>
                  <Checkbox
                    defaultChecked={todo.completed}
                    onClick={() => isCheckedHandle(todo._id, todo.completed)}
                    onChange={onChangeHandle}
                  />
                  <button onClick={() => deleteHandle(todo)}>x</button>
                </div>
              ))}
            </>
          ) : (
            <h1>You have no todos yet</h1>
          )}
        </>
      ) : (
        <h1>Log in to manage your todos!</h1>
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
  )
}

export default Todos
