export const fetchPosts = () => {
  return $.ajax({
    url: `api/posts/`,
    method: 'GET'
  })
}
export const fetchBlogsPosts = blog_id => {
  return $.ajax({
    url: `api/posts/blog/${blog_id}`,
    method: 'GET'
  })
}
export const fetchPost = (postId) => {
  return $.ajax({
    url: `api/posts/${postId}`,
    method: 'GET'
  })
}
export const createPhotoPost = (formData) => {
  
  return $.ajax({
    url: `api/posts/`,
    method: 'POST',
    data: formData ,
    contentType: false,
    processData: false
  })
}
export const createRePost =([postId, userId]) => {
  return $.ajax({
    url: `api/posts/${postId}`,
    method: 'POST',
    data: { userId }
  })
}
export const createPost = (post) => {
  return $.ajax({
    url: `api/posts/`,
    method: 'POST',
    data: post,
    contentType: false,  
    processData: false
  })
}
export const updatePost = (post) => {
  return $.ajax({
    url: `api/posts/${post.id}`,
    method: 'PUT',
    data: { post: post },
  })
}
export const deletePost = (postId) => {
  return $.ajax({
    url: `api/posts/${postId}`,
    method: 'DELETE'
  })
}