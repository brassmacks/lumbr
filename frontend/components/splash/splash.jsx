import React from 'react'
import { Redirect } from 'react-router-dom'
import { SessionButtons } from '../buttons/session_buttons'
export const splash = ({ currentUser, pth}) => {
  if (pth === "/") return (
    <div id="splash-container-root">
      <a id="welcome-note">Welcome to </a>
      <a id="lumbr-txt-logo">lumbr</a>
      {SessionButtons("splash", pth)}
    </div>
  )
  return null;
}
