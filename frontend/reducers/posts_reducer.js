import {
  RECEIVE_ALL_POSTS,
  RECEIVE_BLOGS_POSTS,
  RECEIVE_POST,
  REMOVE_POST
} from '../actions/post_actions'

const PostsReducer = (oldState = {}, action) => {
  let newState = Object.assign({}, Object.freeze(oldState));

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      debugger
      let postStateKeyList = JSON.stringify(newState.posts)
      let postActionKeyList = JSON.stringify(action.posts)
      if (postStateKeyList != postActionKeyList) {
        Object.keys(action.posts).forEach(key => {
          Object.assign(action.posts[key], {id: key});
        })
        Object.assign(newState, action.posts);
        return newState;
      } else return oldState
    case RECEIVE_POST:
      return Object.assign( {}, newState, { [action.post.id]: action.post })
    case REMOVE_POST:
      delete newState[action.postId]
      return newState;
    
    default:
      return newState;
  }
};

export default PostsReducer