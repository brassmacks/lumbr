import React from "react"
import ReactDOM from "react-dom"
import { configureStore } from './store/store'
import Root from './components/root'
import * as seshActions from './actions/session_actions'
import * as userActions from './actions/user_actions'
import fetchUser from './util/user_api_util'

document.addEventListener('DOMContentLoaded', () => {
  let store; 
  
  const freeze = () => {
    document.body.style.overflow = "hidden"
  }
  const melt = () => {
    document.body.style.overflow = "auto"
  }

  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: 
        { users: { [window.currentUser.id]: window.currentUser } }
    }; 
      store = configureStore(preloadedState);
      delete window.currentUser;}
  else { store = configureStore(); }
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} freeze={freeze} melt={melt} />, root);
});