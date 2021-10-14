export const fetchFollowers = ({ followType, id }) => {
  return $.ajax({
    url: `api/${followType}/followers/${id}`,
    method: 'GET'
  })
}

export const fetchFollows = (id) => {
  return $.ajax({
    url: `api/users/follows/${id}`,
    method: 'GET'
  })
}

export const createFollow = ({id, follow}) => {

  return $.ajax({
    url: `api/users/follow/${id}`,
    method: 'POST',
    data: follow
  })
}

export const unFollow = ({ user_id, follow }) => {
  return $.ajax({
    url: `api/users/unfollow/${user_id}`,
    method: 'DELETE',
    data: { user: { user_id: follow} }
  })
}
