import React from 'react'
import EditPostForm from '../posts/edit_post_form_container'


export const Blog = ({blog}) => {

    return (
    <div id="blog">
      <img id="profile-pic" src={blog.profileUrl} alt="" />
      <h3>{blog.blog.url}</h3>
    </div>
   )
  }

