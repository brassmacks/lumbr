export const fetchUserName = (userId) => {
  return $.ajax({
    url: 'api/users',
    method: 'GET',
    data: { userId }
  })
}

export const fetchUserId