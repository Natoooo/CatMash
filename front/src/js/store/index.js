import { createStore, applyMiddleware} from "redux"
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly"
import allReducers from "../reducers/index"
import thunk from "redux-thunk"

export const store = createStore(
  allReducers,
    composeWithDevTools(applyMiddleware(thunk))
)
