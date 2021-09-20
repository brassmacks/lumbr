import { connect } from 'react-redux';
import { Blog } from './blog';
import { withRouter } from 'react-router';
import { fetchBlog } from '../../actions/blog_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  console.log(state);
  return state
  // author: ownProps.author,
  // blog: state.entities.blogs[ownProps.author[user_id]]
  // change to params ownprops userid
}
const mDTP = dispatch => ({
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  closeModal: () => dispatch(closeModal()) 
})

export default withRouter(connect(mSTP, mDTP)(Blog))