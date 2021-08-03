import React from 'react';
import { Link } from 'react-router-dom';



const greeting = ({ currentUser, logout }) => {
  // for main signin / entrance page
  // To be refactored with:
  // Search lumbr
  // lumbr l-tree logo
  // lumbr entrance graphic
  // links to git, about, privacy, support pages

  const sessionLinks = () => (
    // will reuse in multiple areas
    <nav className="login-signup">
    
      <Link to="/login">Log In</Link>
      <Link to="/signup>Sign up">Sign up</Link>

    </nav>
  );

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
      <Link className="sidebar-buttons" id="sidebar-username" to={`/users/show/${currentUser.id}`}>{currentUser.username}
      </Link>
      <button className="sidebar-buttons" id="sidebar-signout" onClick={logout}>
        Log Out
      </button>

    </div>
  )

    return currentUser ? personalGreeting() : sessionLinks();

}

export default greeting