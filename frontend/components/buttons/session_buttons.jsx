import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../../app/assets/images/lmbrlogo.png'

export const SessionButtons = (location, pth) => {
   
  const isShowing = (title, pth) => {
    console.log(pth)
    console.log(title)
    return pth === "/" ? "showing" : "/" + title === pth ? "hidden" : "showing"
  }

  return (
    
        <div id={location + "-auth-buttons"}>
          <Link id="authLinks" className={isShowing("login", pth)} to="/login"><button className="authButts" id="login-butt">Log in</button></Link>
          <Link id="authLinks" className={isShowing("signup", pth)} to="/signup"><button className="authButts" id="signup-butt">Sign up</button></Link>
        </div>


  )
};