import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'
import { createPhotoPost } from '../../actions/post_actions';

const mSTP = ({ session, entities: { users }}, ownProps) => ({
  currentUser: users[session.id],
  post: {
    title: '',
    body: '',
    contentType: ownProps.location.pathname, 
    userId: 0,
    source: '',
    tags: []
  }, 
  formType: 'Create Post'
})

const mDTP = dispatch => ({
  textPost: post => dispatch(createPost(post)),
  createPhoto: post => dispatch(createPhotoPost(post))
})

export default connect(mSTP, mDTP)(PostForm)
