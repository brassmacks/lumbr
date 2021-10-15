import React from 'react'
import  PostButtons  from '../buttons/post_button_container'
import { Dispatch } from 'react'

export const PostIndexItem = ({ postId, post, currentUser, openModal })=> {

  let editable = currentUser.id === post.user_id
  
  const tagString = () => {
    let list = ""
    if (post.tags) {
      post.tags.forEach(tag => {
        list = list +'#'+ tag.tag_content + " "
      })}
    return list
  }

  const blgModal = () => {
    if (editable) {
      openModal('edit blog', currentUser)
    }
    else {
      let data = post.user_id 
      openModal('show blog', data)
    }
  }

  return (
    <li className='post' id='post-item'>
      
      <div id="pi-prof-box" >
          <div id="prof-slider-bounds" >
          <img id="pi-prof-pic" className="sticky" 
            onClick={() => blgModal()} 
            src={post.profileUrl} alt="" ></img>
          </div>
        <div id="pi-post-house">
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
            // ACTION_ITEM 2.15
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
          {<PostButtons
            editable={editable}
            post={post} 
            postId={postId}/>}
        </div>
      </div>
      
    </li>
  )
}
