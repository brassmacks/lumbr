import { RECEIVE_USER } from '../actions/user_actions'
import {
  RECEIVE_CURRENT_USER, RECEIVE_ERRORS
} from '../actions/session_actions'

import merge from 'lodash/merge';

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = merge({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign( newState, { [action.user.id]: action.user });
    case RECEIVE_USER:
      return Object.assign(newState, { [action.user.id]: action.user })
    default:
      return oldState
  }
}

export default usersReducer