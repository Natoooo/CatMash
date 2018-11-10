import React from "react"
import ReactDOM from "react-dom"
import App from "./js/components/App"
import { Provider } from "react-redux"
import { store } from "./js/store/index"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style/app.css"

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById("root")
)
