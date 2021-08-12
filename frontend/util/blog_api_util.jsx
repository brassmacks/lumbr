export const fetchBlog = (userId) => {
  return $.ajax({
    url: `api/blogs/${userId}`,
    method: 'GET',
    data: { userId }
  })
}