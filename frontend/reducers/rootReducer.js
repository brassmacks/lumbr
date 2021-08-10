import { combineReducers } from "redux";

import sessionReducer from './session_reducer'
import { entitiesReducer } from './entities_reducer'
import { errorsReducer } from './errors_reducer'
// convert to ui once filters is built
// import {uiReducer} from './ui_reducer'
import modalReducer from "./modal_reducer";


const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  modal: modalReducer
  
})

export default rootReducer