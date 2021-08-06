import React from 'react'
import PostIndexContainer from '../posts/post_index_container'
import { logout } from '../../actions/session_actions'
import PostShowContainer from "../posts/post_show_container"
import { Link } from 'react-router-dom'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return(
      <div>
        <div>
        <nav>
          <Link to="/new/text">
            <label>

              <button>
                <h2>Aa</h2>
              </button>
              text
           </label>
          </Link>
          <Link to="/new/photo">

            <label>

              <button>
                  <h2>📷</h2>
              </button>
              photo
            </label>
          </Link>
          <Link to="/new/quote">
            <label>

              <button>
                  <h2>󠀢󠀢❞</h2>
              </button>
              quote
            </label>
          </Link>
          <Link to="/new/link">
            <label>

              <button>
                  <h2>🔗</h2>
              </button>
              link
            </label>
          </Link>
          <Link to="/new/video">
            <label>

              <button>
                  <h2>🎥</h2>
              </button>
              video
            </label>
          </Link>
          
        </nav>
        </div>
        <div>
          <PostIndexContainer />
        </div>


      </div>

    )
  }
  
}
export default Dashboard
