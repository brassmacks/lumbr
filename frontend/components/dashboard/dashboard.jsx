import React from 'react'
import PostIndexContainer from '../posts/post_index_container'
import PostShowContainer from "../posts/post_show_container"
import Movie from '../../../app/assets/images/movie.png'
import PostButton from './post_button'
import Photo from '../../../app/assets/images/Photo.png'
import Quote from '../../../app/assets/images/Quote.png'
import Text from '../../../app/assets/images/Text.png'




class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }



  render() {
    const Lnk = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/Link.png'
    let buttons = [['Text', Text], ['Photo', Photo], ['Quote', Quote], ['Link', Lnk], ['Video', Movie] ]
    return (
    <div id="log-run">
    <div id="feed">
      <div id="pic-nav-bind">

          <div id="pi-prof-box">
            <div id="prof-slider-bounds" >
              <img id="pi-prof-pic" className="sticky" src={this.props.currentUser.profileUrl} alt="" ></img>
            </div>
          </div>
    <div id="post-nav-panel" className="post-nav">
      <div id="spacer" className="post-nav">

          <ul className="post-nav" id="post-nav-buttons-list">
            {
              buttons.map((button, i )=> {
                let type, src = button
                return (
                  <li id="post-nav-list-item" 
                  className="post-nav"
                  key={`${i} ${button}`}>
                      
                    <PostButton id="post-nav-button" freeze={this.props.freeze} button={button} />
                  </li>)
              })
            }
          </ul>

            </div>
          </div>
      </div>
          <div id="post-index-container">
            <PostIndexContainer />
          </div>

        </div>
      </div>

    )
  }

}
export default Dashboard