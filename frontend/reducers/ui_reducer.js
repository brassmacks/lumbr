 import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
// add search, tag, follow filters 

export default combineReducers({
  modal: modalReducer
})