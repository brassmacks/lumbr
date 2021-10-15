import { deletePost } from "../../actions/post_actions";
import React from 'react'

import { connect } from "react-redux";
const DeletePst = (props) => {
   debugger
  const sendDelete = (postId) => {
    props.deletePost(postId)
    props.close()
  }

  return (
    <div id='delete-post-nav'>
      <h1 id="delete-post-warning">Are you sure that you want to delete this post?</h1>
      <div id='delete-post-buttons'>

      <button id="confirm-delete" onClick={ ()=> sendDelete(props.post) }>OK</button>
      <button id="cancel-delete" onClick={ () => props.close() }>Cancel</button>
      </div>
    </div>
  )
}

const mSTP = (state, ownProps) => ({
  post: ownProps.post,
  postId: ownProps.postId,
  deletePost: state.deletePost,
  close: ownProps.close
})

const mDTP = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
 
})

export default connect(mSTP,mDTP)(DeletePst)
