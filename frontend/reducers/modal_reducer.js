import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions'

const modalReducer = (oldState = {}, action) => {
  let newState = Object.freeze(oldState)

  switch(action.type) {
    case OPEN_MODAL:
      return action.modalReducer;
    case CLOSE_MODAL:
      return null;
    default:
      return oldState;
  }
}
export default modalReducer