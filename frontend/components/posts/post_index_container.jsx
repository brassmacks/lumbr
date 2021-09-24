import { connect } from 'react-redux';
import PostIndex from './post_index';
import { openModal } from '../../actions/modal_actions';
import { fetchBlog } from '../../actions/blog_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {

  if (ownProps.blogOpen) {
    return {
      currentUser: state.entities.users[state.session.id],
      posts: ownProps.posts,
      freeze: ownProps.freeze,
      blogOpen: true
            }
  }
  return {
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    // posts: Object.values(state.entities.posts),
    freeze: ownProps.freeze,
    blogOpen: false
}}

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  openModal: modal => dispatch(openModal(modal)),
})

export default connect(mSTP,mDTP)(PostIndex) 
