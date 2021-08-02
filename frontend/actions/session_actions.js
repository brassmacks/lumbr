import * as SeshApiUtil from '../util/session_api_util'



export const receiveCurrentUser = (currentUser) => {

}
export const logoutCurrentUser = ()  => {

}
export const receiveErrors = (errors) =>  {

}


export const login = (user) => dispatch => {
  SeshApiUtil.login(user)
  .then(user => dispatch())
}
export const logout = () => dispatch => {
  SeshApiUtil.logout()
  .then(() => dispatch())

}
export const signup = (user) => dispatch => {
  SeshApiUtil.signup(user)
  .then((user) => dispatch())

}