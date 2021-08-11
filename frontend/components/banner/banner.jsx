import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../app/assets/images/lmbrlogo.png'


const banner = ({ currentUser, logout, pth }) => {
  
  const sessionLinks = () => {
    
    const isShowing = (title) => {
      return pth === "/" ? "showing" : "/" + title === pth ? "hidden" : "showing"
    }
    
    return(
      <div id="banner-box">
        <header id="banner" className="login-signup">
        
        <div id="logo-search-box">
            <Link to="/"><img src={logo} id="logo-l"/></Link>
          <input type="text"></input>
        </div>
        <div id="banner-auth-buttons">
        <Link id="authLinks" className={isShowing("login")} to="/login"><button className="authButts" id="login-butt">Log in</button></Link>
        
        <Link id="authLinks" className={isShowing("signup")} to="/signup"><button className="authButts" id="signup-butt">Sign up</button></Link>
        </div>
  
        </header>
      </div>
  )};

  const sideBar = () => (
    <span>
      <div className="sidebar-group">
        <ul>
        
        <Link className="sidebar-buttons" id="sidebar-username" to={`/users/show/${currentUser.id}`}> {currentUser.username}
        </Link>
        <button className="sidebar-buttons" id="sidebar-signout" onClick={() => logout()}>
          Log Out
        </button>
        </ul>
      </div>
    </span>
  )
    
    return currentUser ? sideBar() : sessionLinks();

}

export default banner;