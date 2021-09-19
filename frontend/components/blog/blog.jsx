import React from 'react'
import EditPostForm from '../posts/edit_post_form_container'
import PostIndexContainer from '../posts/post_index_container'

export const Blog = ({blog, author}) => {
    return (
    <div id="blog">
      <div id='blog-profile'>
      <img id="profile-pic" src={blog.profileUrl} alt="" />
      </div>
      <div id="blog-author-banner">

        <div id="blog-author-pic-box">
          <div id="blog-author-pic-circle" >
            <img id="blog-author-img" src={author.profileUrl}   alt="" />
          </div>
        </div>
      </div>
      <div id="blog-author-title">

        <h3 id="blog-author">{blog.blog.url}</h3>
      </div>
      <PostIndexContainer blogOpen={true} posts={blog.posts}/>
    </div>
   )
  }

