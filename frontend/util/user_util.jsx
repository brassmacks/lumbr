export const fetchUser = (userId) => {
  return $.ajax({
    url: 'api/users',
    method: 'GET',
    data: { userId }
  })
}

export const fetchUserId = (userName) => {
  return $.ajax({
    url: 'api/users',
    method: 'GET',
    data: { userName }
  })
}