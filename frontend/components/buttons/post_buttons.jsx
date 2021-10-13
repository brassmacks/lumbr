import React from 'react'
import { openModal } from '../../actions/modal_actions'
import { deletePost, updatePost, createRePost } from '../../actions/post_actions'
import { fetchPost } from '../../actions/post_actions'
import { createFollow } from '../../util/follow_api_util'

export default class PostButtons extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      post: this.props.post,
      editable: this.props.editable,
      location: this.props.location,
      postId: this.props.post.id,
      open: false,
      followable: this.props.followable
    }
    this.Pencil = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/pencil.png'
    this.Trash = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/trash.png'
    this.Repost = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/repost.png'
    this.Sharow = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/share-row.png'

    this.dropMenu = React.createRef()
    this.postId = this.props.post.id;
    this.follow = this.props.followData;
    this.showing = true;
    this.menuToggle = this.menuToggle.bind(this)
    this.menuOpen = this.menuOpen.bind(this)
    this.menuClose = this.menuClose.bind(this)
    this.dropDown = this.dropDown.bind(this)
    //ACTION_ITEM post_author is followed?
  }
  componentDidMount() {
  }
  // use effect || will unmount + compdid || setState 
  componentWillUnmount() {
    app.removeEventListener('click', this.menuClose)
  }
  timeStamp() {
    let timeStamp = new Date(this.state.post.created_at);
    let [dateString, timeString] = [timeStamp.toDateString(), timeStamp.toLocaleTimeString()]
    debugger
    return <a id="post-created-at" className='post-button-drop-down'>
      Posted - {timeString}, <br/> on {dateString}</a>
  }




  menuToggle(e) {
    e.preventDefault()
    e.stopPropagation()
    this.state.open ? this.menuClose() : this.menuOpen()
    
  }
  
  menuClose() {
    this.dropMenu.current.className = 'hidden'
    let app = document.getElementById('app')
    app.removeEventListener('click', this.menuClose)
    this.setState({ open: false})
  }
  copyToClipboard(e) {
    e.stopPropagation()
    navigator.clipboard.writeText(this.state.post.photoUrl)
  }
  
  menuOpen() {
    this.dropMenu.current.className = 'drop-down'
    let app = document.getElementById('app')
    app.addEventListener('click', this.menuClose)
    this.setState({ open: true})
  }
  unFollow(e){
    e.target.className = 'hidden';
    this.props.unFollow(this.props.followData)
  }
  postModal = (modal) => {
    this.props.openModal(modal, this.postId)
  }
  
  button = (type, iconPath) => {
    return (
    <button id={`${type}-button`} 
      className={'in-post-bottom'}
      onClick={() => this.postModal(type)}>
      <img height='21' src={iconPath}></img>
    </button>
    )}

  dropDown(){
    
    
    return (
    <div id="post-options" className='drop-house'>
      <div id="post-opt-ainer">
      <button onClick={this.menuToggle} id="drop-button" 
      className='post-button-dropper'>...</button>
      </div>
      <div id='drop-tainer' className='hidden' ref={this.dropMenu}>

      <ul id="post-options-list" className='post-button-drop-down'>
      <li id="time-stamp" className='post-button-drop-down'>
      {this.timeStamp()}
      </li>
      { this.state.post.title === 'media' &&
        <li id="drop-copy-button" className='post-button-drop-down'>
          <button className='post-button-drop-down'
            onClick={e => this.copyToClipboard(e)}>
            Copy link </button>
      </li>
      }
      {!this.props.followable && 
        <li id="drop-unfollow-button" className='post-button-drop-down'>
          <button onClick={e => this.unFollow(e)} id="" className='post-button-drop-down'>Unfollow</button>
        </li>
      }
        <li id="drop-close-button" className='post-button-drop-down'>
          <a id="post-down-close" className='post-button-drop-down'>
            Close</a>
        </li>
        </ul>
      </div>
    </div>
  )}
  render() {

    if (this.state.location === 'drop-down') return this.dropDown()

  return (
    <div>
          {  this.props.editable ? 
          <div id ='feed-post-butts'>
            
            {this.button('delete post', this.Trash)}
            {this.button('edit post', this.Pencil)}
            {this.button('edit repost', this.Repost)}
            {this.button('share post', this.Sharow)}
            
          </div>
          :
          <div id="feed-post-butts">
            {this.button('share post', this.Sharow)}
            {this.button('edit repost', this.Repost)}
          </div>
          }
          </div>
          )

        }
      }
