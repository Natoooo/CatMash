import { combineReducers } from "redux"
import { catReducer } from "./catReducer"
import { facemashReducer } from "./facemashReducer"

const allReducers = combineReducers({
  cats: catReducer,
  facemash: facemashReducer
})

export default allReducers
