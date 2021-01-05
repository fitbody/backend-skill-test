import React, { useEffect, useState } from "react"
import { todoService } from "../services/todo"

function TodoInfo({ match }) {
  const [todo, setTodo] = useState(null)
  useEffect(() => {
    async function getWorkoutsFunction() {
      const { data } = await todoService(match.params.id)
      console.log(data)
      setTodo(data)
    }
    getWorkoutsFunction()
  }, [])
  return (
    <>
      {todo ? (
        <>
          <h3>Info from todo with id: </h3>
          <h4>{todo._id}</h4>
          <h5>{todo.description}</h5>
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default TodoInfo
