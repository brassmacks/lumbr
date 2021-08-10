import React from 'react'

export const PostIndexItem = ({post, deletePost}) => {
  // move alt to postindex and fetch in component did mount
  return (
    <li>
      <div>
        <h1>{post.author.username}</h1>
        <div><img src={post.profileUrl} width='100px' height="100px" alt="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" ></img></div>
      <a>{post.user_id}user id</a>
      <img 
          className="post-image" 
          width='500px' 
          src={post.photoUrl}>
      </img>
      <h3>{post.title}</h3>
      <p> {post.body}</p>
      
      </div>
    </li>
  )
}
