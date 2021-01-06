import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import NotFound from "./components/404/NotFound.js"
import AppLayout from "./pages/AppLayout"
import Todos from './pages/Todos'
import Login from './pages/Login'
import Signup from './pages/Signup'
import TodoInfo from './pages/TodoInfo'

const Router = () => (
  <BrowserRouter>
    <AppLayout>
      <Switch>
        <Route exact={true} path="/" component={Todos} />
        <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route exact path="/to-do/:id" component={TodoInfo} />
        <Route component={NotFound} />
      </Switch>
    </AppLayout>
  </BrowserRouter>
)

export default Router
