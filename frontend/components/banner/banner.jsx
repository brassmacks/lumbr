import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../app/assets/images/lmbrlogo.png'
import { SessionButtons } from '../buttons/session_buttons'

const banner = ({ currentUser, logout, pth, openModal }) => {
  const location = "banner"
  const sideBar = () => (
    <span>
      <div className="sidebar-group">
        <ul>
          <button onClick={() => openModal('edit blog')}>
          {currentUser.username}
          </button>
  
        <button className="sidebar-buttons" id="sidebar-signout" onClick={() => logout()}>
          Log Out
        </button>
        </ul>
      </div>
    </span>
  )
  
    
    return (
      <div id={"banner-box"}>
        <header id="banner" className="login-signup">

          <div id="logo-search-box">
            <Link to={currentUser ? "/dashboard" : "/"}>
              <img src={logo} id="logo-l" />
                </Link>
            <input type="text" id="banner-search-bar" placeholder="Search lumbr"></input>
          </div>
          
        {currentUser ? sideBar() : SessionButtons("banner", pth)}
        </header>
    
      </div>
      )

}

export default banner;