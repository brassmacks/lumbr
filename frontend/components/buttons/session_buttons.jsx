import React from 'react';
import { Link } from 'react-router-dom'


export const SessionButtons = (location, pth) => {
   
  const isShowing = (title, pth) => {
    // console.log(pth)
    // console.log(title)
    return pth === "/" ? "showing" : "/" + title === pth ? "hidden" : "showing"
  }
  // console.log(location)
  return (
    
        <div id={location + "-auth-buttons"} className="auth-buttons">
          <Link id="authLinks" className={isShowing("login", pth)} to="/login"><button className="authButts" id="login-butt"><a>Log in</a></button></Link>
      <Link id="authLinks" className={isShowing("signup", pth)} to="/signup"><button className={"authButts" + location} id="signup-butt"><a>Sign up</a></button></Link>
        </div>


  )
};