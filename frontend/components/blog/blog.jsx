import React from 'react'
import EditPostForm from '../posts/edit_post_form_container'


export const Blog = ({blog}) => {

    return (
    <div>
      <h3>{blog.blog.url}</h3>
      <img src={blog.profileUrl} alt="" />
    </div>
   )
  }

