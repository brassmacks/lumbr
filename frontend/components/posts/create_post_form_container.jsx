import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'
import { createPhotoPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  const type = ownProps.type
  return({
  currentUser: state.entities.users[state.session.id],
  post: {
    title: '',
    body: '',
    contentType: type,
    source: '',
    tags: []
  },
  formType: type
})}

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  createPost: post => dispatch(createPost(post)),
  createPhoto: post => dispatch(createPhotoPost(post)),
})

export default connect(mSTP, mDTP)(PostForm)
