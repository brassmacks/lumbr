import React from 'react'
import { openModal } from '../../actions/modal_actions'
import { deletePost, updatePost, createRePost } from '../../actions/post_actions'
import { fetchPost } from '../../actions/post_actions'
export default class PostButtons extends React.Component{
  constructor(props) {
    super(props)
  }
  postModal = (modal) => {
    this.props.openModal(modal, this.props.postId)
  }
  
    
  render() {

    return (
      <div>
      <button onClick={()=>this.postModal('share post')}>S</button>
      <button onClick={()=>this.postModal('edit repost')}>R</button>
      <button onClick={()=>this.postModal('edit post')}>E</button>
      <button onClick={()=>this.postModal('delete post')}>X</button>
    </div>
  )
}
}
