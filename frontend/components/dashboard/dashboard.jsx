import React from 'react'
import PostIndexContainer from '../posts/post_index_container'
import PostShowContainer from "../posts/post_show_container"
import Movie from '../../../app/assets/images/movie.png'
import PostButton from './post_button'
import Photo from '../../../app/assets/images/Photo.png'
import Quote from '../../../app/assets/images/Quote.png'
import Text from '../../../app/assets/images/Text.png'
import { NewPostNav } from '../posts/new_post_nav'



class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }
  // TEST ENSURE FUNCTIONALITY AFTER REFACTOR
  componentDidUpdate() {
    // ACTION_ITEM FILL BUILD FETCHPOSTS TO TAKE ARG BASED OFF OF FETCHBLOG
    // this.props.fetchBlog(this.props.currentUser.id)
    
  }
  // componentDidUpdate(){
  //   this.props.fetchPosts()
  // }
  blgModal(){
    // this.props.freeze()
    this.props.openModal('edit blog', this.props.currentUser.id)
  }

  render() {
    const Lnk = 'https://lumbr-seeds.s3.us-west-1.amazonaws.com/images/Link.png'
    let buttons = [['Text', Text], ['Photo', Photo], ['Quote', Quote], ['Link', Lnk], ['Video', Movie] ]
    return (
    <div id="log-run">
    <div id="feed">
      <div id="pic-nav-bind">
      {/* ACTION_ITEM UNSTICK PROFILE PHOTO NEXT TO POST NAV */}
          <div id="pi-prof-box">
            <div id="prof-slider-bounds" >
              <img onClick={() => this.blgModal()}id="pi-prof-pic" className="sticky" src={this.props.currentUser.profileUrl} alt="" ></img>
            </div>
          </div>
        <NewPostNav />
      </div>
          <div id="post-index-container">
            {/* <PostIndexContainer freeze={this.props.freeze} */}
            <PostIndexContainer
              fetchBlog = {this.props.fetchBlog}
              fetchUser = {this.props.fetchUser}
              fetchBlogsPosts = {this.props.fetchBlogsPosts} />
          </div>

        </div>
      </div>

    )
  }

}

export default Dashboard