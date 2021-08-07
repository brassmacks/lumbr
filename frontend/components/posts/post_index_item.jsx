import React from 'react'

export const PostIndexItem = ({post, deletePost}) => {
  return (
    <li>
      <div>
      <a>{post.user_id}</a>
      <img 
          className="post-image" 
          width='500px' 
          src={post.photoUrl}>
      </img>0
      <h3>{post.title}</h3>
      <p> {post.body}</p>
      </div>
    </li>
  )
}
