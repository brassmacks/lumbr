import React from 'react'

export const PostIndexItem = ({post, deletePost}) => {
  // move alt to postindex and fetch in component did mount
  // switch case for each content type
  
  return (
    <li>
      <div>
        <div id="pi-prof-box">
          <div id="prof-slider-bounds" >
          <img id="pi-prof-pic" src={post.profileUrl} width='100px' height="100px" alt="" ></img>
          </div>
          </div>
          <div id="pi-post-house">

        <h3>{post.title}</h3>
        <h3>{post.username}</h3>
      <img key={post.id}
          className="post-image" 
          width='500px' 
          src={post.photoUrl}>
      </img>
      </div>
      <p> {post.body}</p>
      
      </div>
    </li>
  )
}
