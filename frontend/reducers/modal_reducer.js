import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions'

const modalReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch(action.type) {
    case OPEN_MODAL:
      if (action.data) {
        return [ action.modal, action.data ];
      }
      return [action.modal]
    case CLOSE_MODAL:
      return null;
    default:
      return oldState;
  }
}
export default modalReducer