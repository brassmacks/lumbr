import React from 'react'
import  PostButtons  from '../buttons/post_button_container'
import { Dispatch } from 'react'

export const PostIndexItem = ({ postId, post, freeze, fetchBlog, currentUser,
  blogOpen, openModal, deletePost, dispatch })=> {
  // ACTION_ITEM
  // move alt to postindex and fetch in component did mount
  // switch case for each content type
  let editable = currentUser.id === post.user_id
  // let followable = 
  const tagString = () => {
    let list = ""
    if (post.tags) {
      post.tags.forEach(tag => {
        list = list +'#'+ tag.tag_content + " "
      })}
    return list
  }
  const blgModal = () => {
    freeze()
    if (editable) {
      openModal('edit blog', currentUser)
    }
    else {
      let data = post.user_id 
      openModal('show blog', data)
      // store.dispatch({ type: 'OPEN MODAL', modal: 'show blog', data })
    }
  }

  return (
    <li className='post' id='post-item'>
      
      <div id="pi-prof-box" >
          <div id="prof-slider-bounds" >
          <img onClick={() => blgModal()} id="pi-prof-pic" className="sticky" src={post.profileUrl} alt="" ></img>
          </div>
        <div id="pi-post-house">
          {/* ACTION_ITEM
              refactor to disclude author name when in blog show 
              or post belongs to current user
          */}
        <h3 id="post-author">{post.username}</h3>
    
          {
            post.content_type === 'Text' ?
          <div id="text-content" className="post">
          <h3 id="post-title">{post.title}</h3>
          <p className="post" id="text-content">{post.body}</p>
          <p>{tagString()}</p>
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
            <p>{tagString()}</p>
            </div>
          </div>
          }
          {<PostButtons editable={editable} post={post} postId={postId}/>}
        </div>
      </div>
      
    </li>
  )
}
