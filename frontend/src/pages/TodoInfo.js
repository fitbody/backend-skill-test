import React, { useEffect, useState } from "react"
import { todoService } from "../services/todo"

function TodoInfo({ match }) {
  const [todo, setTodo] = useState(null)
  useEffect(() => {
    async function getWorkoutsFunction() {
      const { data } = await todoService(match.params.id)
      setTodo(data)
    }
    getWorkoutsFunction()
  }, [])
  return (
    <div className='container'>
      {todo ? (
        <>
          <h3>Task: </h3>
          <h4>{todo.description} </h4>
          {todo.completed ? (
              <h5>This task has been completed. One less thing to worry about!</h5>
          ): (
              <h5>This task has not been completed yet!</h5>
          )}
        </>
      ) : (
        ""
      )}
    </div>
  )
}

export default TodoInfo
