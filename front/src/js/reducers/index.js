import { combineReducers } from "redux"
import { catsReducer } from "./catsReducer"
import { facemashReducer } from "./facemashReducer"

const allReducers = combineReducers({
  cats: catsReducer,
  facemash: facemashReducer
})

export default allReducers
