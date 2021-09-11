import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { SessionButtons } from '../buttons/session_buttons'
export const splash = ({ currentUser, pth}) => {

  if (pth === "/") return (
    <div id="bground" className="splash">

      <div id="splash-container-root" className="splash-buttons">
        {/* <span></span> */}
        <div height="20%"></div>
        {/* <a id="welcome-note">Welcome to </a> */}
        <div id="lumbr-title">
        <a id="lumbr-txt-logo">l</a>
        <a id="lumbr-txt-title">umbr</a>
        </div>

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
