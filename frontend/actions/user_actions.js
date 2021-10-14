import * as UserApiUtil from '../util/user_api_util'
import * as FollowApiUtil from '../util/follow_api_util'
export const RECEIVE_USER = 'RECEIVE_USER'
export const FOLLOW_CONTENT = 'FOLLOW_CONTENT'
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW'

const removeFollow = followData => ({
  type: REMOVE_FOLLOW,
  followData
}) 

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
})

const followContent = follow=> ({
  type: FOLLOW_CONTENT,
  follow
})


export const fetchUser = userId => dispatch => (
  UserApiUtil.fetchUser(userId)
    .then(user => (dispatch(receiveUser(user))
    ))
)

export const createFollow = (followData) => dispatch => (
  FollowApiUtil.createFollow(followData)
  .then(follow => (dispatch(followContent(follow))))
)
export const unFollow = (followData) => dispatch => (
  FollowApiUtil.unFollow(followData)
    .then( user_id => (dispatch(removeFollow(user_id))))
)