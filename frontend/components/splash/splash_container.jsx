import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import { splash } from './splash';

const mSTP = ({ session }) => ({
  currentUser: session.currentUser
})

const mDTP = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mSTP,mDTP)(splash);