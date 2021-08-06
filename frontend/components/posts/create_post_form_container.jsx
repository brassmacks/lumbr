import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions'

const mSTP = state => ({
  post: {
    title: '',
    body: '',
    contentType: 'text', 
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


