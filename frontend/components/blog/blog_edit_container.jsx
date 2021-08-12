import { connect } from 'react-redux';
import { blog } from './blog';
import { withRouter } from 'react-router';


const mSTP = ({ session, entities: { users } }, ownProps) => ({
  author: users[session.id],
  blogURL: "/" + author.username
})
const mDTP = dispatch => ({
  
})

export default withRouter(connect(mSTP,mDTP)(blog))