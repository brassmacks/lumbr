import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions'

const mSTP = state => ({
  posts: Object.values(state.entities.posts)
})

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mSTP,mDTP)(PostIndex) 