import React from "react"
import ReactDOM from "react-dom"
import { configureStore } from './store/store'
// import * as seshAPI from "./util/session_api_util"


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore()
  
  // *** testing
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // end testing ****

  const root = document.getElementById('root');
  ReactDOM.render(<h1>lumbr</h1>, root);
});