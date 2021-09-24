import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router'
import { openModal } from '../../actions/modal_actions'
import { fetchBlog } from '../../actions/blog_actions';
import blog_show_container from '../blog/blog_show_container';
const mSTP = ({ session, entities: { users }, modal }, ownProps) => {
  return ({
    currentUser: users[session.id],
    pth: ownProps.location.pathname,
    modal,
    freeze: ownProps.freeze
  })
};


const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchBlog: (blogId,data) => dispatch(fetchBlog(blogId,data))
})

export default withRouter(connect(mSTP, mDTP)(Dashboard))