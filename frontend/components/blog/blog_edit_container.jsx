import { connect } from 'react-redux';
import { fetchBlog } from '../../actions/blog_actions';
import BlogEdit from './blog_edit';
import { changeUserAvatar } from '../../actions/user_actions';

const mSTP = (state) => ({
  blog: state.entities.blogs[state.session.id],
  currentUser: state.entities.users[state.session.id],
  posts: state.entities.posts
})

const mDTP = dispatch => ({
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  closeModal: () => dispatch(closeModal()),
  changeAvatar: ({id, file}) => dispatch(changeUserAvatar({id, file}))
})

export default connect(mSTP,mDTP)(BlogEdit)