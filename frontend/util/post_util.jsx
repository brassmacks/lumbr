export const fetchPosts = () => {
  return $.ajax({
    url: `api/posts/`,
    method: 'GET'
  })
}
export const fetchPost = (postId) => {
  $.ajax({
    url: `api/posts/${postId}`,
    method: 'GET'
  })
}
export const createPhotoPost = (formData) => {
  
  $.ajax({
    url: `api/posts/`,
    method: 'POST',
    data: formData ,
    contentType: false,
    processData: false
  })
}
export const createPost = (post) => {
  $.ajax({
    url: `api/posts/`,
    method: 'POST',
    data: { post },

  })
}
export const updatePost = (post) => {
  $.ajax({
    url: `api/posts/${post.id}`,
    method: 'PATCH',
    data: { post }
  })
}
export const deletePost = (postId) => {
  $.ajax({
    url: `api/posts/${postId}`,
    method: 'DELETE'
  })
}