import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';
import { splash } from './splash';
import { fetchPost, fetchPosts } from '../../actions/post_actions';

const mSTP = ({ session, entities: { users }}, ownProps) => ({
  currentUser: users[session.id],
  pth: ownProps.location.pathname
})

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default withRouter(connect(mSTP,mDTP)(splash));