import React from 'react'
import EditPostForm from '../posts/edit_post_form_container'


export const Blog = ({blog, author}) => {
    
    return (
    <div>
      {/* <img src={blog.profile_photo_id} alt="" /> */}
      <h3>{author.username}</h3>
    </div>
   )
  }

