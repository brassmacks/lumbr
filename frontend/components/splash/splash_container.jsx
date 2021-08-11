import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { openModal } from '../../actions/modal_actions';
import { splash } from './splash';

const mSTP = ({ session, entities: { users }}, ownProps) => ({
  currentUser: users[session.id],
  pth: ownProps.location.pathname
})

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default withRouter(connect(mSTP,mDTP)(splash));