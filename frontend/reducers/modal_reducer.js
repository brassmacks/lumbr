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

        return {type: action.modal, data: action.data} ;
      }
      return {type: action.modal}
    case CLOSE_MODAL:
      return {type: null};
    default:
      return oldState;
  }
}
export default modalReducer