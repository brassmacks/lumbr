import { connect } from 'react-redux';
import { fetchBlog } from '../../actions/blog_actions';
import BlogEdit from './blog_edit';

const mSTP = (state) => ({
  blog: state.entities.blogs[state.session.id]
})

const mDTP = dispatch => ({
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP,mDTP)(BlogEdit)