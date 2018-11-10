import { combineReducers } from "redux"
import { catsReducer } from "./catsReducer"

const allReducers = combineReducers({
  cats: catsReducer
})

export default allReducers
