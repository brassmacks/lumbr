import React, { Component } from 'react'
import { Blog } from './blog'
export default class BlogEdit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      follows: this.props.currentUser.follows,
      followers: this.props.currentUser.followers
    }
    this.postsList = []
    this.blogOpts = React.createRef()
    this.fileInput = React.createRef()  
    this.blogChannel = React.createRef()
    this.sortPosts()
  }
  sortPosts() {
    Object.values(this.props.posts).map(post => {
      if (post.user_id === this.props.currentUser.id) this.postsList.push(post)
  })}

  hide = () => {
    this.blogOpts.current.className = "hidden"
  }

  popUp = (e) => {
    e.stopPropagation()
    if (this.blogOpts.current.className === "hidden") {
      this.blogOpts.current.className = "showing"
      this.blogChannel.current.addEventListener('click', this.hide, { once: true })
    } else this.blogOpts.current.className = "hidden"
  }

  handleLogout = (e) => {
    e.stopPropagation()
    this.props.logout()
  }
  forwardClick = (bttn) => bttn.click()
  handleAvatar = (e) => {
    console.log(e.target.files[0])
    let file = new FormData()
    file.append("user[avatar]", e.target.files[0])
    let id = this.props.currentUser.id
    this.props.changeAvatar(id, file)
  }
  render() {
    return (
        <div id="blogchannel" ref={this.blogChannel}>
          <span id="blog-ban-nav" className="blog-banner">
            <button id="white-X" className="blog-banner"
              onClick={() => this.props.closeModal()}>
            ✕</button>
          <div>

          <button id="blog-edit-nav" className="blog-banner"
            onClick={e => this.popUp(e)}
          >···</button>
            <div id="blog-drop-house" className="hidden" ref={this.blogOpts}>
              <ul id="blog-drop-list">
                <li id="blog-drop-header" className="ban-drop">
                  <h1 id="ban-drop-title">Account</h1>
                  <button className="ban-drop" id="log-out" onClick={(e) => this.handleLogout(e)}>
                    logout
                  </button>
                </li>
                <li id="prof-pic" onClick={e => e.stopPropagation()} >
                  <button className="ban-drop" id="prof-pic-butt"
                    onClick={e => e.stopPropagation(),
                     () => this.forwardClick(this.fileInput.current)}>
                    change profile photo

                  <input type="file" ref={this.fileInput} accept="image/*" 
                    id="prof-pic-change" className="blog-banner" 
                    style={{display: "none"}}
                    onChange={e => this.handleAvatar(e)}
                    />
                  </button>


                </li>
                <li>
                  <button className="ban-drop">
                    follows
                    <h1>{this.state.follows.length}</h1>
                  </button>
                </li>
                <li>
                  <button className="ban-drop">
                    followers
                    <h1> {this.state.followers.length} </h1>
                  </button>
                </li>
              </ul>
            </div>

            
          </div>
          </span>
        <div>
          <Blog blog={this.props.blog} author={this.props.currentUser} 
          posts={this.postsList}/>
        </div>
      </div>
    )
  }
}
