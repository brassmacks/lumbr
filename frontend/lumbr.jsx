import React from "react"
import ReactDOM from "react-dom"
import { configureStore } from './store/store'
import Root from './components/root'
import * as seshActions from './actions/session_actions'

// import * as seshAPI from "./util/session_api_util"


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  
  // *** testing
  window.signup = seshActions.signup
  window.login = seshActions.login
  window.logout = seshActions.logout
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // end testing ****

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});