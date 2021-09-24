import { deletePost } from "../../actions/post_actions";
import React from 'react'

import { connect } from "react-redux";

 const DeletePst = (props) => {
  const sendDelete = (postId) => {
    props.deletePost(postId)
  }
  return (
    <div id='delete-post-nav'>
      <button onClick={ () => close() }>Cancel</button>

      <button onClick={ ()=> sendDelete(props.post)}>OK</button>

    </div>
  )
}
const mSTP = (state, ownProps) => ({
  post: ownProps.post,
  postId: ownProps.postId,
  deletePost: state.deletePost
})

const mDTP = dispatch => ({
  deletePost: id => dispatch(deletePost(id)),
  close: () => close() 
})

export default connect(mSTP,mDTP)(DeletePst)
