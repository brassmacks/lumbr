import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router'
import { openModal } from '../../actions/modal_actions'
import { fetchBlog } from '../../actions/blog_actions';
import { fetchPosts } from '../../actions/post_actions';
import blog_show_container from '../blog/blog_show_container';
import { fetchUser } from '../../actions/user_actions';
import { fetchBlogsPosts } from '../../actions/post_actions';



const mSTP = ({ session, entities: { users, posts }, modal }, ownProps) => {
  return ({
    posts: posts,
    currentUser: users[session.id],
    pth: ownProps.location.pathname,
    modal,
    // freeze: ownProps.freeze
  })
};


const mDTP = dispatch => ({
  logout: () => dispatch(logout()),
  openModal: modal => dispatch(openModal(modal)),
  fetchBlog: (blog_id, data) => dispatch(fetchBlog(blog_id, data)),
  fetchUser: (user_id) => dispatch(fetchUser(user_id)),
  fetchPosts: () => dispatch(fetchPosts()),
  fetchBlogsPosts: blog_id=> dispatch(fetchBlogsPosts(blog_id))
})

export default withRouter(connect(mSTP, mDTP)(Dashboard))