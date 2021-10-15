import React from 'react'
import PostIndexContainer from '../posts/post_index_container'
import PostShowContainer from "../posts/post_show_container"
import PostButton from './post_button'
import { NewPostNav } from '../posts/new_post_nav'



class Dashboard extends React.Component {
  constructor(props) {
    super(props)

  }
  // ACTION_ITEM 2.0 CHECK OUT THESE BLOGS
  // TEST ENSURE FUNCTIONALITY AFTER REFACTOR
  componentDidUpdate() {
    // ACTION_ITEM 3 FILL BUILD FETCHPOSTS TO TAKE ARG BASED OFF OF FETCHBLOG
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

    return (
    <div id="log-run">
    <div id="feed">
      <div id="pic-nav-bind">
      {/* ACTION_ITEM 2.0 UNSTICK PROFILE PHOTO NEXT TO POST NAV */}
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