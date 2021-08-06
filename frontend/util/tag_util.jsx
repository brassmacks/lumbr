export const fetchTagId = (tag) => {
  return $.ajax ({
    url: '/api/tags',
    method: 'GET',
    data: { tag }
})
}
export const fetchTagged = (tagId) => {
  return $.ajax ({
    url: '/api/tags',
    method: 'GET',
    data: { tagId }
  })
}