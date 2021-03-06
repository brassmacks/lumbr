import React from 'react';
import { Link } from 'react-router-dom'
import DummyButton from './Dummy_Signin_container';

export const SessionButtons = (location, pth) => {
  
  const isShowing = (title, pth) => {
    return pth === "/" ? "showing" : "/" + title === pth ? 
    "hidden" : "showing"
  }

  return (
    <div id={location + "-auth-buttons"} className="auth-buttons">
      <Link id="authLinks" className={isShowing("login", pth)} to="/login">
          <button className="authButts" id="login-butt">
              Log in
          </button>
      </Link>
      <Link id="authLinks" className={isShowing("signup", pth)} to="/signup">
        <button className={"authButts" + location} id="signup-butt">
          Sign up
        </button>
      </Link>
      <DummyButton />
    </div>


  )
};