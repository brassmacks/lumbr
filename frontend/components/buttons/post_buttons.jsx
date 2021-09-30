import React from 'react'
import { openModal } from '../../actions/modal_actions'
import { deletePost, updatePost, createRePost } from '../../actions/post_actions'
import { fetchPost } from '../../actions/post_actions'
import { createFollow } from '../../util/follow_api_util'

export default class PostButtons extends React.Component{
  constructor(props) {
    super(props)
    this.postId = this.props.post.id
    this.follow = this.props.followData
  }
  componentDidMount() {
    console.log("here")
    console.log(this.postId)
    console.log(this.follow)
    console.log(this.props)
  }
  postModal = (modal) => {
    this.props.openModal(modal, postId)
  }
  
    
  render() {
    
    return (
      <div>
      <button onClick={()=>this.postModal('share post')}>S</button>
      <button onClick={()=> this.props.createFollow(this.props.followData)}>'follow post'</button>
      <button onClick={()=>this.postModal('edit repost')}>R</button>
      <button onClick={()=>this.postModal('edit post')}>E</button>
      <button onClick={()=>this.postModal('delete post')}>X</button>
    </div>
  )
}
}
