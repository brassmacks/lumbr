import React from 'react';
import { Link } from 'react-router-dom';



const greeting = ({ currentUser, logout, pth }) => {
  // for main signin / entrance page
  // To be refactored with:
  // Search lumbr
  // lumbr l-tree logo
  // lumbr entrance graphic
  // links to git, about, privacy, support pages
  
  const sessionLinks = () => {
    
    const isShowing = (title) => {

      return pth === "/" ? "showing" : "/" + title === pth ? "hidden" : "showing"
    }
    
    return(
    // will reuse in multiple areas
    <header>
    <nav className="login-signup">
      <ul>
        
        <Link to="/"><button><h2 id="logo-l">l</h2></button></Link>
        <Link className={isShowing("login")} to="/login"><button id="login-butt">Log in</button></Link>
        <Link className={isShowing("signup")} to="/signup"><button id="signup-butt">Sign up</button></Link>
        
      

      </ul>
    </nav>
    </header>
  )};
    
  // To be refactored with:
  // likes counter link
  // following counter link
  // settings link
  // Help link
  // extra** change palette
  // ul including
    // posts
    // followers
    // activity
    // drafts
  // sidebar footer including
    // about 
    // git
    // linkdin

  const sideBarGreeting = () => (
    <div className="sidebar-group">
      <ul>
      
      <Link className="sidebar-buttons" id="sidebar-username" to={`/users/show/${currentUser.id}`}>{currentUser.username}
      </Link>
      <button className="sidebar-buttons" id="sidebar-signout" onClick={() => logout()}>
        Log Out
      </button>
      </ul>
    </div>
  )
    // refactor to show entrance or home
    
    return currentUser ? sideBarGreeting() : sessionLinks();

}

export default greeting