import { combineReducers } from "redux";;
import { sessionErrorsReducer } from './session_errors_reducer';

export const errorsReducer = combineReducers({
  session: sessionErrorsReducer
});
//  ACTION_ITEM 3 incorporate other errors by building then adding their reducers
//   CREATE 404 FOR CATASTROPHE
//  POST
//  BLOG
//  MODAL
//  FOLLOW
//  TAG**

