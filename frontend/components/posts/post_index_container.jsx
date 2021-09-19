import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions'

const mSTP = (state, ownProps) => {

  let blog = state.entities.blogs
  console.log(ownProps)

  if (ownProps.blogOpen) {
    return { posts: ownProps.posts }
  }
  return {
  posts: Object.values(state.entities.posts)
}}

const mDTP = dispatch => ({
  
  fetchPosts: () => dispatch(fetchPosts()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mSTP,mDTP)(PostIndex) 
