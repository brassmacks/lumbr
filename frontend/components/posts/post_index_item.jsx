import React from 'react'

export const PostIndexItem = ({post, deletePost}) => {
  return (
    <li>

      <h3>{post.title}</h3>
      <p> {post.body}</p>
      <img className="post-image" width='500px' src={post.photoUrl}></img>
    </li>
  )
}
