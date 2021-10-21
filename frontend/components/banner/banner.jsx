import React from 'react';
import { Link } from 'react-router-dom';
import { SessionButtons } from '../buttons/session_buttons'
import { changeUserAvatar } from '../../actions/user_actions';
import SideBar from './sidebar_container';

const banner = ( { ownBlogFetched, currentUser, logout, pth, openModal, fetchBlog} ) => {
  if (currentUser && !ownBlogFetched) fetchBlog(currentUser.id)
  // if (currentUser) fetchBlog(currentUser.id)
  const house = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/house.png'
  const compass = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/compass.png'
  const compose = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/compost.png'
  const profile = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/profile.png'

  const location = "banner"

  // const blgModal = () => {
  //   // freeze();
  //   let data = currentUser.id
  //   openModal('edit blog', data); 
  // }
  // const pstModal = () => {
  //   openModal('new Post choose')
  // }
  const logo = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/lmbrlogo.png'

  // const sideBar = () => {
  //   let riseDown = React.useRef(null)
  //   let imageInput = React.useRef(null)
  //   let hide = () => riseDown.current.className ="hidden"
    
  //   let popUp =(e)=>{
  //     e.stopPropagation()
  //     if (riseDown.current.className === "hidden") {
  //       riseDown.current.className = "showing"
  //       document.addEventListener('click', hide, {once:true})
  //     } else riseDown.current.className = "hidden" 
  //   }

  //   let handleLogout =(e) => {
  //     e.stopPropagation()
  //     logout() 
  //   }

  //   let handleAvatar = (e) => {
  //     e.stopPropagation()
  //     let file = new FormData()
  //     file.append("user[avatar]", e.target.form[0].files[0])
  //     let id = currentUser.id
  //     changeUserAvatar(id, file)
  //   }
  //   return(
  //   <span>
  //     <div className="sidebar-group">
  //         <button id="ban-blog-open" className="ban-butts"
  //          onClick={() => blgModal('edit blog')} style={{opacity: 5}} >
  //           <img id='house' className="ban-butts" src={house}></img>    
  //         </button>

  //         <button className="ban-butts" id="compass">
  //           <img className="ban-butts" src={compass} alt="" />
  //         </button>
  //         <button className="ban-butts" id="profile" onClick={e => popUp(e)}>
  //           <img className="ban-butts" src={profile} />
  //           </button>

  //         <div id="profile-drop-house" className="hidden" ref={riseDown}>
  //           <ul id="profile-drop-list">
  //             <li id="profile-drop-header" className="ban-drop">
  //               <h1 id="ban-drop-title">Account</h1>
  //               <button className="ban-drop" id="log-out" onClick={(e) => handleLogout(e)}>
  //                 logout
  //               </button>
  //             </li>
  //             <li> 
  //               <form action="" >
  //                 <input type="file" ref={imageInput} accept="image/*" onClick={e => e.stopPropagation()} />
  //                 <input type="submit" onClick={e => handleAvatar(e)}/>
  //               </form>
  //             </li>
  //             <li>
  //               <button className="ban-drop">                
  //               follows
  //               <h1>{currentUser.follows.length}</h1>
  //               </button>
  //             </li>
  //             <li>
  //               <button className="ban-drop">                
  //               followers
  //               <h1> {currentUser.followers.length} </h1>
  //               </button>
  //             </li>
  //           </ul>
  //         </div>


  //       <button className="ban-butts" id="compose" onClick={() => pstModal()}>
  //         <img className="ban-butts" id="compose" src={compose} alt="" />
  //       </button>
  //     </div>
  //   </span>
  // )}
  
    
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
          
        {currentUser ? <SideBar /> : SessionButtons("banner", pth)}
        </header>
    
      </div>
      )

}

export default banner;