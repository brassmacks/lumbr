import { connect } from 'react-redux';
import { fetchBlog } from '../../actions/blog_actions';
import BlogEdit from './blog_edit';

const mSTP = (state) => ({
  author: state.entities.users[state.session.id],
  blog: state.entities.blog
})

const mDTP = dispatch => ({
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP,mDTP)(BlogEdit)