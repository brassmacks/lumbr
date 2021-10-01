import {
  CLEAR_SESSION_ERRORS,
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
  } from "../actions/session_actions"
  // import { merge } from "lodash";

  // TEST ENSURE NO ERRORS FROM SWITCHING OFF MERGE
  // TEST ENSURE NO ERRORS FROM REMOVING CURRENT USER FROM SWITCH STATEMENT
export const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return Object.assign(newState, action.errors);
    case CLEAR_SESSION_ERRORS:
      return [];
    default:
      return oldState;
  }

}
