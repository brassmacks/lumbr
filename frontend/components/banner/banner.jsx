import React from 'react';
import { Link } from 'react-router-dom';
import { SessionButtons } from '../buttons/session_buttons'

const banner = ( { ownBlogFetched, currentUser, logout, pth, openModal, fetchBlog, freeze} ) => {
  if (currentUser && !ownBlogFetched) fetchBlog(currentUser.id)
  // if (currentUser) fetchBlog(currentUser.id)
  const house = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/house.png'
  const compass = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/compass.png'
  const compose = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/compost.png'

  const location = "banner"

  const blgModal = () => {
    // freeze();
    let data = currentUser.id
    openModal('edit blog', data); 
  }
  const pstModal = () => {
    openModal('new Post choose')
  }
  const logo = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/lmbrlogo.png'
  const sideBar = () => (
    <span>
      <div className="sidebar-group">
          <button id="ban-blog-open" className="ban-butts"
           onClick={() => blgModal('edit blog')} style={{opacity: 5}} >
            <img id='house' className="ban-butts" src={house}></img>
          {/* {currentUser.username} */}
          </button>
  
        <button className="ban-butts" id="compass" onClick={() => logout()}>
          <img className="ban-butts" src={compass} alt="" />
        </button>
        <button className="ban-butts" id="compose" onClick={() => pstModal()}>
          <img className="ban-butts" id="compose" src={compose} alt="" />
        </button>
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