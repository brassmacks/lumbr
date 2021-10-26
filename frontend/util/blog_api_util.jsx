export const fetchBlog = (userId) => {
  return $.ajax({
    url: `api/blogs/${userId}`,
    method: 'GET',
    data: { userId }
  })
}
export const fetchBlogs = (userIds) => {
  console.log(userIds)
  return $.ajax({
    url: `api/blog/feed`,
    method: 'GET',
    data: {'blog': {"user_ids": userIds}}
  })
}