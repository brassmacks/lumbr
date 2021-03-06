import { connect } from 'react-redux';
import banner from './banner';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions'
import { fetchBlog } from '../../actions/blog_actions';

const mSTP = ( { session, entities: { users, blogs } }, ownProps) => {
    return {
        ownBlogFetched: blogs[session.id],
        currentUser: users[session.id],
        pth: ownProps.location.pathname,
        // freeze: ownProps.freeze
}};

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchBlog: (user) => dispatch(fetchBlog(user)),
    openModal: (modal, data) => dispatch(openModal(modal, data))
});

export default withRouter(connect(mSTP, mDTP)(banner));

