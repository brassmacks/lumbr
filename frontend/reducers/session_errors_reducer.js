import {RECEIVE_SESSION_ERRORS} from "../actions/session_actions"
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { merge } from "lodash";

export const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      return merge(newState, action.errors);
    case RECEIVE_CURRENT_USER:
      return []
    default:
      return oldState;
  }

}
