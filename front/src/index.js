import React from "react"
import ReactDOM from "react-dom"
import App from "./js/components/App"
import Results from "./js/components/Results"
import { Provider } from "react-redux"
import { store } from "./js/store/index"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./style/app.css"
import "./style/results.css"

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/results" component={Results} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.getElementById("root")
)
