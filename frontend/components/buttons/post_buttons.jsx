import React from 'react'
import { openModal } from '../../actions/modal_actions'
import { deletePost, updatePost, createRePost } from '../../actions/post_actions'
import { fetchPost } from '../../actions/post_actions'
import { createFollow } from '../../util/follow_api_util'
import Pencil from '../../../app/assets/images/pencil.png'
import Trash from '../../../app/assets/images/trash.png'
import Repost from '../../../app/assets/images/repost.png'
import Sharow from '../../../app/assets/images/share-row.png'

export default class PostButtons extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      post: this.props.post,
      editable: this.props.editable,
      location: this.props.location,
      postId: this.props.post.id
    }
    this.postId = this.props.post.id
    this.follow = this.props.followData
    this.showing = true
    //ACTION_ITEM post_author is followed?
  }
  componentDidMount() {
  }
  // use effect || will unmount + compdid || setState 

  followToggle(e) {
    e.target.className = 'hidden'
    this.props.createFollow(this.props.followData)
    this.showing = !this.showing
    // ACTION_ITEM ternary if this.authorIsFollowed // display = hidden
    // add author to list of currentUser.following_by_id
  }
  postModal = (modal) => {
    this.props.openModal(modal, this.postId)
  }
  button = (type, iconPath) => <button id={`${type}-button`} 
    className={'in-post-bottom'}
    onClick={() => this.postModal(type)}>
    <img height='21' src={iconPath}>
    </img>
  </button>

  render() {
    
    if (this.state.location === 'follow') {
      
      return (
      this.showing ? 
      < button id='follow' className='follow-button'
      onClick = {(e)=> this.followToggle(e)}> 
      Follow</button >
      : ''
  )}
  
  
  return (
    <div>
          {  this.props.editable ? 
          <div>
            
            {this.button('delete post', Trash)}
            {this.button('edit post', Pencil)}
            {this.button('edit repost', Repost)}
            {this.button('share post', Sharow)}
            
          </div>
          :
          <div>
            {this.button('edit repost', Repost)}
            {this.button('share post', Sharow)}
          </div>
          }
          </div>
          )

        }
      }
