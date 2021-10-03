import { RECEIVE_BLOG } from '../actions/blog_actions'

const blogsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_BLOG:
      Object.assign(newState, action.blog )
      return newState 
    default:
      return oldState
  }
}

export default blogsReducer