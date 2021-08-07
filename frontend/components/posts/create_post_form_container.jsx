import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'

const mSTP = (state, ownProps) => ({
  
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
  action: post => dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(PostForm)


