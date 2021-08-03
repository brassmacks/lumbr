import { combineReducers } from "redux";
import usersReducer from "./usersReducer";

const entitiesReducer = combineReducers({
  users: usersReducer
})

// this file is responsible for combining and tracking the relational data of lumbr

export default entitiesReducer 