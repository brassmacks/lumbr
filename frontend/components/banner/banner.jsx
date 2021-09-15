import React from 'react';
import { Link } from 'react-router-dom';
import { SessionButtons } from '../buttons/session_buttons'

const banner = ({ currentUser, logout, pth, openModal, fetchBlog, freeze}) => {

  if (currentUser) fetchBlog(currentUser.id)
  const location = "banner"

  const blgModal = () => {
    freeze();
    openModal('edit blog');
  }
  const logo = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/lmbrlogo.png'
  const sideBar = () => (
    <span>
      <div className="sidebar-group">
        <ul>
          <button onClick={() => blgModal('edit blog')}>
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
      <div id="banner-box" className="main">
        <header id="banner"
          className={
            currentUser ? "nav" : "splash" } >

          <div id="logo-search-box">
            <Link to={currentUser ? "/dashboard" : "/"}>
              <img id='lmbrlogo' className="banner" src={logo} id="logo-l" />
                </Link>
            <input type="text" id="banner-search-bar" placeholder="Search lumbr"></input>
          </div>
          
        {currentUser ? sideBar() : SessionButtons("banner", pth)}
        </header>
    
      </div>
      )

}

export default banner;