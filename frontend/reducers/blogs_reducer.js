import { RECEIVE_BLOG, RECEIVE_BLOGS } from '../actions/blog_actions'

const blogsReducer = (oldState = {}, action) => {
  Object.freeze(oldState)
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_BLOG:
      Object.assign(newState, action.blog)
      return newState;
    case RECEIVE_BLOGS:
      Object.assign(newState, action.blogs)
      return newState;
    default:
      return oldState
  }
}

export default blogsReducer