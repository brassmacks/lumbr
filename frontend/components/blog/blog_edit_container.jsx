import { connect } from 'react-redux';
import Blog from './blog';
import { withRouter } from 'react-router';
import { fetchBlog } from '../../actions/blog_actions';

const mSTP = ({ session, entities: { users } }, ownProps) => ({
  author: users[session.id]
})
const mDTP = dispatch => ({
  fetchBlog: userId => dispatch(fetchBlog(userId))
})

export default withRouter(connect(mSTP,mDTP)(Blog))