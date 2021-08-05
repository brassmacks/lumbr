import { connect } from 'react-redux';
import PostShow from './post_show';
import fetchPost from './post_show';

const mSTP = (state, ownProps) => ({
  post: state.posts[ownProps.match.params.postId] 
})

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId))
})

export default connect(mSTP, mDTP)(PostShow);