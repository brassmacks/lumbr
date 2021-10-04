import { assign } from 'lodash';
import React from 'react';
import { PostIndexItem } from './post_index_item';

class PostIndex extends React.Component {
  
  constructor(props){
    
    super(props)
    console.log('inside post index constructor', this.props)
    this.loading = true
    this.state = {
      posts: this.props.posts,
      allPosts: this.props.allPosts,
      posts_by_Id: this.props.posts_by_Id,
      currentUser: this.props.currentUser,
      users_by_Id: this.props.users_by_Id,
      users: this.props.users,
      blogs_by_Id: this.props.blogs_by_Id,
      isFetched: false,
      userFetchList: [],
      blogFetchList: []

    }
    // this.contentToFetch = this.contentToFetch.bind(this)
    this.postCheck = this.postCheck.bind(this)


  }
  postCheck = () =>  {
    this.loading = (this.state.posts.length < 5  && (!this.props.blogOpen))
  }
  componentDidMount() {
    this.postCheck()

    if (this.loading) {
      this.props.fetchPosts().then( posts => {
        console.log('inside component did mount post index')
        if (!this.props.blogOpen) {
          this.setState({posts: Object.assign({}, this.state.posts, posts), isFetched: false})
        }
      })
    }
    // if (!this.props.blogOpen) this.contentToFetch()
    // this.props.fetchBlog(this.props.currentUser.id)
    // this.state.blogFetchList.forEach(blog_id => this.props.fetchBlogsPosts(blog_id))
  }

  componentWillUnmount() {
    this.postCheck()
    if (!this.state.isFetched) this.contentToFetch()
    // if (!this.state.blogOpen) this.contentToFetch()
  }

  contentToFetch(){
    console.log("inside contentToFetch", this.state)
    let authorList = []
    this.state.posts_by_Id.forEach(key => {
      let author_id = this.state.allPosts[key].user_id
      console.log(author_id)
      if (!this.state.users[author_id] 
        && !authorList.includes(author_id) 
        && !this.state.userFetchList.includes(author_id)) {
        authorList.push(author_id)
      }
    })
    authorList.forEach(author => {
      this.props.fetchUser(author)
      this
      this.props.fetchBlog(author)
    })
    console.log(authorList)
    this.setState({
      isFetched: true, userFetchList: authorList,
        blogFetchList: authorList})
  }





  render() { 
    let { deletePost, fetchUser, 
            users_by_Id, blogs_by_Id, fetchBlog, posts } = this.props;
    let postFeed = Object.keys(this.props.posts).length > 0 ? 
        Object.values(this.props.posts) : this.state.posts
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