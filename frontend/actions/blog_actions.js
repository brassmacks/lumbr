import * as BlogApiUtil from '../util/blog_api_util'
export const RECEIVE_BLOG = 'RECEIVE_BLOG'

const receiveBlog = blog => ({
  type: RECEIVE_BLOG,
  blog
})

export const fetchBlog = userId => dispatch => (
  BlogApiUtil.fetchBlog(userId)
    .then(blog => (dispatch(receiveBlog(blog))))  
)
