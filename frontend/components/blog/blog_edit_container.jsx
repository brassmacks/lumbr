import { connect } from 'react-redux';
import Blog from './blog';
import { fetchBlog } from '../../actions/blog_actions';

const mSTP = ({ session, entities: { users, blogs },  }) => ({
  author: users[session.id],
  blogs
})
const mDTP = dispatch => ({
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  closeModal: () => dispatch(closeModal())
})

export default connect(mSTP,mDTP)(Blog)