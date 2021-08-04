import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';


let defaultState = {id: null, errors: []};

const sessionReducer = (oldState = defaultState, action) => {

  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = Object.assign({}, newState, { id: action.user.id });
      return newState;
    case LOGOUT_CURRENT_USER:
      newState = Object.assign({}, newState, { id: null });
      return newState;
    default:
      return oldState;
  }
}

export default sessionReducer
