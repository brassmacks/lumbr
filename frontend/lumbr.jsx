import React from "react"
import ReactDOM from "react-dom"
import { configureStore } from './store/store'
import Root from './components/root'
import * as seshActions from './actions/session_actions'
import * as userActions from './actions/user_actions'
import fetchUser from './util/user_api_util'
// import * as seshAPI from "./util/session_api_util"


document.addEventListener('DOMContentLoaded', () => {
  let store; 
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
        session: { id: window.currentUser.id }
        };
      store = configureStore(preloadedState);
      delete window.currentUser;
      } else {
        store = configureStore();
      }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});