import { connect } from 'react-redux';
import Dashboard from './dashboard';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router'


const mSTP = ({ session, entities: { users } }, ownProps) => {
  return ({
    currentUser: users[session.id],
    pth: ownProps.location.pathname
  })
};


const mDTP = dispatch => ({
  logout: () => dispatch(logout())
})

export default withRouter(connect(mSTP, mDTP)(Dashboard))