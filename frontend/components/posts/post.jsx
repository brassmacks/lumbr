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
    }

    this.isFollowed = this.props.currentUser.follows.includes(this.state.author)
    

    console.log('is followed',this.isFollowed)
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
    let followable = (!this.isFollowed && !editable)
    console.log(followable, post, this.state.currentUser)
    let postId = this.state.post.id
    let blogOpen = this.props.blogOpen
    return (
      <li className='post' id='post-item'>

        <div id="pi-prof-box" className={blogOpen ? 'blog' : ''}>
          <div id="prof-slider-bounds" >
            <img onClick={() => this.blgModal()} id="pi-prof-pic" className="sticky" src={post.profileUrl} alt="" ></img>
          </div>
          <div id="pi-post-house">
            {/* ACTION_ITEM
              refactor to disclude author name when in blog show 
              or post belongs to current user
          */}
          <span id="post-top"> 
            <div id="post-spacer-top" className='post'>
            <div id="post-top-row">
              {/* <div id="post-top-auth-follow"> */}
          { !blogOpen ? <h3 id="post-author">{post.username}</h3> : '' }
          
          { followable ?
            <PostButtons id='follow-button'
              // freeze={this.props.freeze} 
              editable={editable} 
              post={post} 
              location={'follow'}/>
              :
            ''
            }
              </div>
            <PostButtons id='post-options' post={post} location='drop-down'/>
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
            <PostButtons editable={editable} post={post} location={'option'}/>
          </div>
        </div>

      </li>
    )
  }


  }


export default Post