import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions'
import { unFollow } from '../../actions/user_actions'
import { deletePost, updatePost, createRePost } from '../../actions/post_actions'
import { fetchPost } from '../../actions/post_actions'
import PostButtons  from './post_buttons'

const mSTP = (state, ownProps) => {
  // 
  return {
  post: ownProps.post,
  editable: ownProps.editable,
  followable: ownProps.followable,
  followData: {
      user_id: state.session.id,
      follow: ownProps.post.user_id
    },

}}

const mDTP = dispatch => ({
  deletePost: postId => dispatch(deletePost(postId)),
  updatePost: post => dispatch(updatePost(post)),
  createRePost: postId => dispatch(createRePost(postId)),

  openModal: (modal, data) => dispatch(openModal(modal, data)),
  unFollow: followData => dispatch(unFollow(followData))
})
export default connect(mSTP,mDTP)(PostButtons)