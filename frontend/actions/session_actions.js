import * as SeshApiUtil from '../util/session_api_util'
import { receiveAllPosts, RECEIVE_ALL_POSTS} from './post_actions';
import { fetchPosts } from '../util/post_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSON_ERRORS"

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user
})

export const logoutCurrentUser = ()  => ({
  type: LOGOUT_CURRENT_USER
})

export const receiveErrors = (errors) =>  ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
})


export const login = (user) => dispatch => (
  SeshApiUtil.login(user)
  .then(user => (
      dispatch(receiveCurrentUser(user))
      ), err => (dispatch(receiveErrors(err.responseJSON))
  )).then( ()=> fetchPosts()
      .then(posts => (dispatch(receiveAllPosts(posts)))
      ), err => (dispatch(receiveErrors(err.responseJSON)) )
  )
)

export const logout = () => dispatch => {
  SeshApiUtil.logout()
  .then(() => dispatch(logoutCurrentUser()))

}
export const signup = (user) => dispatch => (
  SeshApiUtil.signup(user)
  .then((user) => (dispatch(receiveCurrentUser(user))
  ), err => (dispatch(receiveErrors(err.responseJSON))
  ))

);