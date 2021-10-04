import React from 'react'
import EditPostForm from '../posts/edit_post_form_container'
import PostIndexContainer from '../posts/post_index_container'
import treesplash from '../../../app/assets/images/thowindownroots.png'

export const Blog = (props) => {
  console.log('inside blog', props)
  let {blog, author, posts} = props
  let sortPosts = (posts) => {
    let postsList = []
    Object.values(posts).map(post => {
      if (post.user_id === author.id) postsList.push(post)
    })
    return postsList
  }
  return (
    <div id="blog">
      <div id='blog-profile'>
        <img id="profile-pic" src={blog.profileUrl} alt={treesplash} />
      </div>
      <div id="blog-author-banner">

        <div id="blog-author-pic-box">
          <div id="blog-author-pic-circle" >
            <img id="blog-author-img" src={author.profileUrl}   alt={treesplash} />
          </div>
        </div>
      </div>
      <div id="blog-author-title">

        <h3 id="blog-author">{blog.blog.url}</h3>
      </div>
      { 
        blog.posts.length > 0 ?
          <PostIndexContainer blogOpen={true} posts={sortPosts(posts)}/>
          :
          <div id='no-post-placeholder' className='no-post' >
            <img src="" alt="" height='80px' width='85px' className='no-post' />
            <div className='no-post' >
              {/* add new line
                  center
                  text size
                  no post base image
                  style and link grow something
                */}
                <a>This (b)log is Empty.</a>
              <a className='no-post' >Grow Something</a>
            </div>
          </div>
      }
    </div>
   )
  }

