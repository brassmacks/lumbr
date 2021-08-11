import React from 'react'

export const splash = ({ currentUser, openModal }) => {
  return (
    <div id="splash-container-root">
      <a id="welcome-note">Welcome to </a>
      <a id="lumbr-txt-logo">lumbr</a>
      <button className="authButts" id="login-butt" onClick={() => openModal('login')}>Log in</button>
      <br/>
      <button className="authButts" id="signup-butt" onClick={() => openModal('signup')}>Sign up</button>
    </div>
  )
}
