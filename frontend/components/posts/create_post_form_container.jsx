import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'
import { createPhotoPost } from '../../actions/post_actions';

const mSTP = state => ({
  currentUser: state.entities.users[state.session.id],
  post: {
    title: '',
    body: '',
    contentType: state.modal.split(1),
    source: '',
    tags: []
  },
  formType: state.modal
})

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  textPost: post => dispatch(createPost(post)),
  createPhoto: post => dispatch(createPhotoPost(post)),
})

export default connect(mSTP, mDTP)(PostForm)
