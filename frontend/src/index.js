import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"
import "antd/dist/antd.css"
import { ContextProvider } from "./hooks/context"

ReactDOM.render(
  <ContextProvider>
    <Router />
  </ContextProvider>,
  document.getElementById("root")
)

serviceWorker.unregister()
