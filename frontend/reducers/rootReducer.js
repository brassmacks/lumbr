import { combineReducers } from "redux";
import { entitiesReducer } from './entities_reducer'
import { errorsReducer } from './errors_reducer'
import modalReducer from "./modal_reducer";
import sessionReducer from './session_reducer'

const rootReducer = combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  modal: modalReducer
  
})

export default rootReducer