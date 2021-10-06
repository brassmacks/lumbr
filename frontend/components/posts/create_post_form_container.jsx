import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'
import { createPhotoPost } from '../../actions/post_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  return({
    currentUser: state.entities.users[state.session.id],
    type: ownProps.type,  
    user_id: state.session.id, 
    postId: false,  
    formType: ownProps.formType
  });
}

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  postAction: post => dispatch(createPost(post)),
  createPhoto: post => dispatch(createPhotoPost(post)),
})

export default connect(mSTP, mDTP)(PostForm)
