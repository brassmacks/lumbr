import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

let defaultState = {id: null, errors: []};

const sessionReducer = (oldState = defaultState, action) => {

  Object.freeze(oldState);
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      Object.assign({}, newState, { id: action.id });
      return newState;
    case LOGOUT_CURRENT_USER:
      Object.assign({}, newState, { id: null });
      return newState;
    case RECEIVE_ERRORS:
      Object.assign({}, newState, {errors: action.errors})
    default:
      return oldState;
  }
}

export default sessionReducer
