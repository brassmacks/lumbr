import React from "react";
import PostButtons from "../buttons/post_button_container";

class Post extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      post: this.props.post,
      currentUser: this.props.currentUser,
      author: this.props.author,
      tags: this.props.tags,
      editable: this.props.editable,
      isFollowed: this.props.currentUser.follows.includes(this.props.author)
    }
    this.postBody = React.createRef()
    this.cornerCover = React.createRef()
    this.dogEar = React.createRef()
    this.turnPage = this.turnPage.bind(this);
    this.turnBack = this.turnBack.bind(this);

  }

  blgModal = () => {
    // this.props.freeze()
    if (this.state.editable) {
      this.props.openModal('edit blog', this.state.currentUser)
    }
    else {
      let blog = this.state.author
      this.props.openModal('show blog', blog)
      // store.dispatch({ type: 'OPEN MODAL', modal: 'show blog', data })
    }
  }
  followToggle(e) {
    e.target.className = 'hidden'
    this.props.createFollow(this.props.followData)
    this.setState({ isFollowed: true })
    // ACTION_ITEM 1.3 CREATE REF TO ALL FOLLOW BUTTONS RELATED TO AUTHOR
    // STATE CHANGE AND RE-RENDER OF ALL POSTS BY AUTHOR WHEN ONE IS CLICKED
  }
  turnPage(){
    this.dogEar.current.style.boxShadow = '0 0 6px 6px rgba(0, 25, 53, 22%)'
    this.dogEar.current.style.transform = 'translateX(-15px)'
    this.dogEar.current.style.transform += 'translateY(15px)'
    this.cornerCover.current.style.transform = 'rotate(.125turn) translateY(11px)'
  }
  turnBack(){
    this.cornerCover.current.style.transform = 'rotate(.125turn) '
    this.dogEar.current.style.transform = 'none'
    this.dogEar.current.style.boxShadow = 'none'
  }
  tagString = () => {
    let list = ""
    if (this.state.post.tags) {
        this.state.post.tags.forEach(tag => {
        list = list + '#' + tag.tag_content + " "
      })
    }
    return list
  }

  render() {
    let post = this.state.post
    let editable = this.state.editable
    let followable = (!this.state.isFollowed && !editable)
    let postId = this.state.post.id
    let blogOpen = this.props.blogOpen
    return (
      <li ref={this.postBody} className='post' id='post-item'>

        <div id="pi-prof-box" className={blogOpen ? 'blog' : ''}>
          <div id="prof-slider-bounds" >
            <img onClick={() => this.blgModal()} id="pi-prof-pic" className="sticky" src={post.profileUrl} alt="" ></img>
          </div>
          <div id="pi-post-house">
          <span id="post-top" 
          onMouseEnter={this.props.blogOpen ? ()=> null : () => this.turnPage()}
              onMouseLeave={this.props.blogOpen ? ()=> null : () => this.turnBack() }> 
              {
                !this.props.blogOpen ? 
                <div>
                  <div id="corner-turn" ref={this.dogEar}></div>
                  <div id="corner-box" ref={this.cornerCover}></div>
                </div>
                  : 
                  ''
              }
            <div id="post-spacer-top" className='post'>
            <div id="post-top-row">
              {/* <div id="post-top-auth-follow"> */}
          { !blogOpen ? <h3 id="post-author">{post.username}</h3> : '' }
          
          { followable ?
            < button id='follow' className='follow-button'
              onClick={(e) => this.followToggle(e)}>
              Follow</button >
              :
            ''
            }
              </div>
            <PostButtons id='post-options' post={post} followable={followable} location='drop-down'/>
              </div>

            </span>
            { post.content_type === 'Text' ?
                <div id="text-content" className="post">
                  <h3 id="post-title">{post.title}</h3>
                  <p className="post" id="text-content">{post.body}</p>
                  <p>{this.tagString()}</p>
                </div>
                :
                <div>
                  <img key={post.id}
                    // onClick={() => postZoom()}
                    className="post-image"
                    width='540px'
                    src={post.photoUrl}>
                  </img>
                  <div id="text-content" className="post">
                    <p className="post" id="text-content">{post.body}</p>
                    <p>{this.tagString()}</p>
                  </div>
                </div>
            }
              <footer id='post-footer'>
                <PostButtons editable={editable} post={post} location={'option'}/>
              </footer>
          </div>
        </div>

      </li>
    )
  }


  }


export default Post