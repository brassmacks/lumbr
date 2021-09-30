import { connect } from 'react-redux'
import { openModal } from '../../actions/modal_actions'
import { createFollow } from '../../actions/user_actions'
import { deletePost, updatePost, createRePost } from '../../actions/post_actions'
import { fetchPost } from '../../actions/post_actions'
import PostButtons  from './post_buttons'

const mSTP = (state, ownProps) => ({
  post: ownProps.post,
  editable: ownProps.editable,
  followData: {
    id: state.session.id,
    follow: {
      user: ownProps.post.user_id
    }
  }
})

const mDTP = dispatch => ({
  updatePost: post => dispatch(updatePost(post)),
  createRePost: postId => dispatch(createRePost(postId)),
  createFollow: followData => dispatch(createFollow(followData)),
  openModal: (modal, data) => dispatch(openModal(modal, data))
})
export default connect(mSTP,mDTP)(PostButtons)