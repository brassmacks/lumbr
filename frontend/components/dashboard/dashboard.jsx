import React from 'react'
import PostIndexContainer from '../posts/post_index_container'
import { logout } from '../../actions/session_actions'
import PostShowContainer from "../posts/post_show_container"

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <h1>dash</h1>
        <PostIndexContainer />

      </div>

    )
  }
  
}
export default Dashboard
