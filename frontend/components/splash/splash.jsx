import React from 'react'
import { unmountComponentAtNode } from 'react-dom'
import { Link } from 'react-router-dom'
import { SessionButtons } from '../buttons/session_buttons'

export const splash = ( { currentUser, pth, fetchPosts} ) => {
  
  
  
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

        { SessionButtons("splash", pth) }
        <nav id="spash-bottom-nav">
          
        <a id="gitlink" href="https://github.com/brassmacks">Github</a>
        {/* <Link id='aboutLink'>about</Link> */}
        </nav>

      </div>
    </div>
  )
  return null;
}
