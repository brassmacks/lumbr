import { combineReducers } from "redux";;
import { sessionErrorsReducer } from './session_errors_reducer';

export const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});
//  ACTION_ITEM incorporate other errors by building then adding their reducers
//  POST
//  BLOG
//  MODAL
//  FOLLOW
//  TAG**

