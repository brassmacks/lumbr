import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../../app/assets/images/lmbrlogo.png'

export const SessionButtons = (location, pth) => {

  const isShowing = (title, pth) => {
    console.log(pth)
    return pth === "/" ? "showing" : "/" + title === pth ? "hidden" : "showing"
  }

  return (
    
        <div id={location + "-auth-buttons"}>
          <Link id="authLinks" className={isShowing("login")} to="/login"><button className="authButts" id="login-butt">Log in</button></Link>
          <Link id="authLinks" className={isShowing("signup")} to="/signup"><button className="authButts" id="signup-butt">Sign up</button></Link>
        </div>


  )
};