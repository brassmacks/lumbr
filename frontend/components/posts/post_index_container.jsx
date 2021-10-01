import { connect } from 'react-redux';
import PostIndex from './post_index';
import { openModal } from '../../actions/modal_actions';
import { fetchBlog } from '../../actions/blog_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
const mSTP = (state, ownProps) => {
  
  if (ownProps.blogOpen) {
    
    return {
      users_by_Id: Object.keys(state.entities.users).map(key => parseInt(key)),
      blogs_by_Id: Object.keys(state.entities.blogs),
      currentUser: state.entities.users[state.session.id],
      posts: ownProps.posts,
      freeze: ownProps.freeze,
      blogOpen: true
            }
  }
  return {
    users_by_Id: Object.keys(state.entities.users).map(key => parseInt(key)),
    blogs_by_Id: Object.keys(state.entities.blogs).map(key => parseInt(key)),
    currentUser: state.entities.users[state.session.id],
    posts: state.entities.posts,
    freeze: ownProps.freeze,
    blogOpen: false
}}

const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  fetchUser: user_id => dispatch(fetchUser(user_id))
})

export default connect(mSTP,mDTP)(PostIndex) 
