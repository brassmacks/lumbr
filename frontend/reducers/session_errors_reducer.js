import {RECEIVE_SESSION_ERRORS} from "../actions/session_actions"
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const sessionErrorsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = merge({}, oldState);
  switch(action.type){
    case RECEIVE_SESSION_ERRORS:
      newState[errors] = action.errors
      return newState;
    case RECEIVE_CURRENT_USER:
      newState[errors] = []
      return newState;
    default:
      return oldState;
  }

}
export default sessionErrorsReducer