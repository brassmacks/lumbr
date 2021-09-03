import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { SessionButtons } from '../buttons/session_buttons'
export const splash = ({ currentUser, pth}) => {

  if (pth === "/") return (
    <div id="bground">

      <div id="splash-container-root">
        <span></span>
        <div height="20%"></div>
        <a id="welcome-note">Welcome to </a>
        <a id="lumbr-txt-logo">lumbr</a>

        {SessionButtons("splash", pth)}
        <nav id="spash-bottom-nav">
        <Link id="gitlink"to="https://github.com/brassmacks">Github</Link> 
        <Link id='aboutLink'>about</Link>
        </nav>

      </div>
    </div>
  )
  return null;
}
