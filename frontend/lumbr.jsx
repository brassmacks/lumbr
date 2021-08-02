import React from "react"
import ReactDOM from "react-dom"
import * as seshAPI from "./util/session_api_util"
document.addEventListener('DOMContentLoaded', () => {

  window.login = seshAPI.login;
  window.logout = seshAPI.logout;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>lumbr</h1>, root);
});