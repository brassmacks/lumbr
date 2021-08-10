export const fetchUser = (userId) => {
  return $.ajax({
    url: 'api/users',
    method: 'GET',
    data: { userId }
  })
}