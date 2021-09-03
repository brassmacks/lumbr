import { connect } from 'react-redux';
import banner from './banner';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions'
import { fetchBlog } from '../../actions/blog_actions';

const mSTP = ( { session, entities: { users, blogs } }, ownProps) => ({
    currentUser: users[session.id],
    pth: ownProps.location.pathname

});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchBlog: (user) => dispatch(fetchBlog(user)),
    openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mSTP, mDTP)(banner));

