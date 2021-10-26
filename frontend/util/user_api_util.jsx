import { pullAt } from "lodash"

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

export const changeUserAvatar = (id, file) => {
  return $.ajax({
    url: `api/users/avatar/${id}`,
    method: 'PUT',
    data: file,
    contentType: false,
    processData: false
  })
}