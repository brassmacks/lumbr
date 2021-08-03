import {
  RECEIVE_CURRENT_USER, RECEIVE_ERRORS
} from '../actions/session_actions'

import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      Object.assign({}, newState, { [action.user.id]: action.user });
      return newState;
    default:
      return oldState
  }
}

export default usersReducer