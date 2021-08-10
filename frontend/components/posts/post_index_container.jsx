import { connect } from 'react-redux';
import PostIndex from './post_index';
import { fetchPosts, deletePost } from '../../actions/post_actions'
import { fetchUser } from '../../actions/user_actions'
const mSTP = state => ({
  posts: Object.values(state.posts)
})

const mDTP = dispatch => ({
  // fetchUser: (userId) => dispatch(fetchUser(userId)),
  fetchPosts: () => dispatch(fetchPosts()),
  updatePost: post => dispatch(updatePost(post)),
  deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mSTP,mDTP)(PostIndex) 