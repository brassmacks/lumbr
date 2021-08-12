import React from 'react'

export const PostIndexItem = ({post, deletePost}) => {
  // move alt to postindex and fetch in component did mount
  console.log(post)
  return (
    <li>
      <div>
        <h3>{post.title}</h3>
        <h3>{post.username}</h3>
        <div><img src={post.profileUrl} width='100px' height="100px" alt="" ></img></div>
      <img 
          className="post-image" 
          width='500px' 
          src={post.photoUrl}>
      </img>
      <p> {post.body}</p>
      
      </div>
    </li>
  )
}
