import { connect, createDispatchHook } from 'react-redux';
import banner from './banner';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';

const mapStateToProps = ( { session, entities: { users } }, ownProps) => {
  return({
    currentUser: users[session.id],
    pth: ownProps.location.pathname
    
  })
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(banner));

