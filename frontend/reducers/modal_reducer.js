import {
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/modal_actions'

const modalReducer=(oldState={ type: null, blog: null }, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState)

  switch(action.type) {
    case OPEN_MODAL:
      return action.data ? 
        Object.assign(newState, 
          { type: action.modal, blog: newState.entities.blogs[action.data] })
      
       : Object.assign(newState, { type: action.modal, blog: null })
    case CLOSE_MODAL:
      return Object.assign(newState, { type: null, blog: null });
    default:
      return newState;
  }
}
export default modalReducer