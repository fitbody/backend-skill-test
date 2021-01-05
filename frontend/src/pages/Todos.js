import React, { useEffect, useState } from "react"
import { todosService } from "../services/todo"
import { Link } from "react-router-dom"
import { useContextInfo } from "../hooks/context"

const Todos = () => {
  const [todos, setTodos] = useState([])
  const { user } = useContextInfo()
  useEffect(() => {
    async function getWorkoutsFunction() {
      const { data: data } = await todosService()
      setTodos(data)
    }
    getWorkoutsFunction()
  }, [])
  return (
      <>
      {user ? (
        <>
       {todos ? (
         <>
           {todos.map((todo) => (
             <div key={todo.description}>
               <Link to={`/todo/${todo._id}`}>
                 <li>{todo.description}</li>
               </Link>
               <button>x</button>
             </div>
           ))}
         </>
       ) : (
         <h1>You have no todos yet</h1>
       )}
     </>
      ): (
          <h1>Log in to manage your todos!</h1>
      )}
      </>
 
  )
}

export default Todos