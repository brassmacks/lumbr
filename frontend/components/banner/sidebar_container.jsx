import { connect } from "react-redux"
import { changeUserAvatar } from "../../actions/user_actions"
import { logout, logoutCurrentUser } from "../../actions/session_actions"
import { openModal } from "../../actions/modal_actions"
import SideBar from "./sidebar"

const mSTP = state => {
  const house = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/house.png'
  const compass = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/compass.png'
  const compose = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/compost.png'
  const profile = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/profile.png'

  return {
    currentUser: state.entities.users[state.session.id],
    house: house,
    compass: compass,
    compose: compose,
    profile: profile,
    
  }
}

const mDTP = dispatch => ({
  changeUserAvatar: (id, file) => dispatch(changeUserAvatar(id, file)),
  logout: () => dispatch(logout()),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
})

export default connect(mSTP, mDTP)(SideBar)
