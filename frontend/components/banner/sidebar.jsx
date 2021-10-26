import React from 'react'
import { logoutCurrentUser } from '../../actions/session_actions'

class SideBar extends React.Component {
  constructor(props){
    
    super(props)
    this.state = {
      follows: this.props.currentUser.follows,
      followers: this.props.currentUser.followers,
    }
    this.riseDown = React.createRef()
  }


    hide = () => {
      this.riseDown.current.className = "hidden"
    }

    popUp = (e) => {
      e.stopPropagation()
      if (this.riseDown.current.className === "hidden") {
        this.riseDown.current.className = "showing"
        document.addEventListener('click', this.hide, { once: true })
      } else this.riseDown.current.className = "hidden"
    }

    handleLogout = (e) => {
      e.stopPropagation()
      this.props.logout()
    }


  blgModal = () => {
    // freeze();
    let data = this.props.currentUser.id
    this.props.openModal('edit blog', data);
  }
  pstModal = () => {
    this.props.openModal('new Post choose')
  }
  
  render(){
    

  return(
  <span>
  <div className="sidebar-group">
    <button id="ban-blog-open" className="ban-butts"
      onClick={() => this.blgModal('edit blog')} style={{ opacity: 5 }} >
      <img id='house' className="ban-butts" src={this.props.house}></img>
    </button>

    <button className="ban-butts" id="compass">
      <img className="ban-butts" src={this.props.compass} alt="" />
    </button>
    <button className="ban-butts" id="profile" onClick={e => this.popUp(e)}>
      <img className="ban-butts" src={this.props.profile} />
    </button>

    <div id="profile-drop-house" className="hidden" ref={this.riseDown}>
      <ul id="profile-drop-list">
        <li id="profile-drop-header" className="ban-drop">
          <h1 id="ban-drop-title">Account</h1>
          <button className="ban-drop" id="log-out" onClick={(e) => this.handleLogout(e)}>
            logout
          </button>
        </li>
        {/* <li>
          <form action="" >
            <input type="file" ref={this.imageInput} accept="image/*" onClick={e => e.stopPropagation()} />
            <input type="submit" onClick={e => this.handleAvatar(e)} />
          </form>
        </li> */}
        <li>
          <button className="ban-drop">
            follows
            <h1>{this.state.follows.length}</h1>
          </button>
        </li>
        <li>
          <button className="ban-drop">
            followers
            <h1> {this.state.followers.length} </h1>
          </button>
        </li>
      </ul>
    </div>


    <button className="ban-butts" id="compose" onClick={() => this.pstModal()}>
      <img className="ban-butts" id="compose" src={this.props.compose} alt="" />
    </button>
  </div>
    </span >
  )}
}

export default SideBar