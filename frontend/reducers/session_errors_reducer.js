import {
  CLEAR_SESSION_ERRORS,
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER
  } from "../actions/session_actions"

import { merge } from "lodash";

export const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return merge(newState, action.errors);
    case CLEAR_SESSION_ERRORS:
      return [];
    case RECEIVE_CURRENT_USER:
      return [];
    default:
      return oldState;
  }

}
