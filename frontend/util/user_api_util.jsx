export const fetchUser = (id) => {
  return $.ajax({
    url: `api/users/${id}`,
    method: 'GET',
    data: { id }
  })
}

export const fetchUserId = (userName) => {
  return $.ajax({
    url: `api/users/${userName}`,
    method: 'GET',
    data: { userName }
  })
}