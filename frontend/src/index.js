import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import Router from "./Router"
import * as serviceWorker from "./serviceWorker"
import "antd/dist/antd.css"
import { ContextProvider } from "./hooks/context"
import { ToastContainer, Slide } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={4500}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Slide}
    />
    <ContextProvider>
      <Router />
    </ContextProvider>
  </>,
  document.getElementById("root")
)

serviceWorker.unregister()
