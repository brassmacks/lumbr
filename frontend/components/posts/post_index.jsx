import { assign } from 'lodash';
import React from 'react';
import { PostIndexItem } from './post_index_item';

class PostIndex extends React.Component {
  constructor(props){
    super(props)
    this.loading = true

    console.log(props, 'inside post index constructor')
    this.state = {
      posts: this.props.posts,
      currentUser: this.props.currentUser,
      users_by_Id: this.props.users_by_Id,
      blogs_by_Id: this.props.blogs_by_Id,
      blogFetchList: this.props.blogFetchList,
      userFetchList: this.props.userFetchList
    }
    this.postCheck = this.postCheck.bind(this)

  }
  postCheck = () =>  {
    this.loading = (this.state.posts.length < 5  && (!this.props.blogOpen))
  }
  componentDidMount() {
    console.log('this thingy', Object.keys(this.state.posts))
    this.postCheck()
    if (!this.loading) {
      this.props.fetchPosts().then( posts => {
        if (!this.props.blogOpen) {
          this.setState({posts: Object.assign({}, this.state.posts, posts)})
        }
      })
      
    }
    
    console.log(this.state)
    this.props.fetchBlog(this.props.currentUser.id)
    this.state.blogFetchList.forEach(blog_id => this.props.fetchBlogsPosts(blog_id))
  }

  componentWillUnmount() {
    this.postCheck
  }

  render() {
    let { deletePost, fetchUser, 
            users_by_Id, blogs_by_Id, fetchBlog, posts } = this.props;
    let postFeed = Object.keys(this.props.posts).length > 0 ? 
        Object.values(this.props.posts) : this.state.posts
    console.log(this.state.posts)
    this.postCheck()
    if (this.loading) {
      return (
        <div>
          <h1>LOADING</h1>
        </div>
      )
    }
    return (
      <div id="post-index-wrapper">
        <ul id="post-index-list">
          
          {
          // TEST CHECK FUNCTIONALITY BLOG FETCH 
          // ACTION_ITEM ADD PROFILE_URLS_BY_ID OBJ TO STATE, REF OFF POST/USER

            Object.values(posts).map((post, i) => {
            
            // convert this list to props
              return <PostIndexItem 
                currentUser={this.props.currentUser}
                freeze={this.props.freeze}
                postId={post.id}
                post={post}
                deletePost={deletePost}
                blogOpen={this.props.blogOpen}
                key={`${post.id}${post.username}${i}`}
                dispatch={this.props.dispatch}
                
                openModal={this.props.openModal} />
              }
            )
          }
        </ul>
    
      </div>
    )

  }
}
export default PostIndex