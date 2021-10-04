import * as BlogApiUtil from '../util/blog_api_util'
import { receiveAllPosts } from './post_actions'
export const RECEIVE_BLOG = 'RECEIVE_BLOG'
export const RECEIVE_BLOGS_POSTS = 'RECEIVE_BLOGS_POSTS'

const receiveBlog = (blog) => ({
  type: RECEIVE_BLOG,
  blog
})


export const fetchBlog = userId => dispatch => (
  BlogApiUtil.fetchBlog(userId)
    .then(({blog, posts}) => {
      dispatch(receiveBlog(blog)), dispatch(receiveAllPosts(posts))}
    )  
)
export const fetchBlogs = userIds => dispatch => (
  BlogApiUtil.fetchBlogs(userIds)
    .then(blog => (dispatch(receiveBlog(blog))))  
)
