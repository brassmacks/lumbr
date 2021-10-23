import React from 'react'
import { Link } from 'react-router-dom'
import { SessionButtons } from '../buttons/session_buttons'

export const splash = ( { currentUser, pth, fetchPosts} ) => {
  
  
  
  if (pth === "/") {
    document.body.style.overflow = "hidden"
    return (
    
    <div id="bground" className="splash">
      
      <div id="splash-container-root" className="splash-buttons">
        {/* <span></span> */}
        <div height="20%"></div>
        {/* <a id="welcome-note">Welcome to </a> */}
        <div id="lumbr-title">
        <a id="lumbr-txt-logo">l</a>
        <a id="lumbr-txt-title">umbr</a>
        </div>

        { SessionButtons("splash", pth) }

        <nav id="splash-bottom-nav">
          
        <a id="gitlink" href="https://github.com/brassmacks">Github</a>
          <a id="linkdlink" href="https://www.linkedin.com/in/joshua-elliott-a044b0209/">LinkedIn</a>
        <a id='aboutLink'>About</a>
        </nav>
      </div>
    </div>
  )}
  return null;
}
