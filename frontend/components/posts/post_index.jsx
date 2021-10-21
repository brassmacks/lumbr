import React from 'react';
import { PostIndexItem } from './post_index_item';
import Post from './post_container'

class PostIndex extends React.Component {
  
  constructor(props){
    
    super(props)
    // ACTION_ITEM 4.3
    // this.loading = true
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
      blogFetchList: [],

    }
    this.contentToFetch = this.contentToFetch.bind(this)
    this.postCheck = this.postCheck.bind(this)
    this.postCheck()

  }
  postCheck = () =>  {
    this.loading = (this.state.posts.length < 5  && (!this.props.blogOpen))
  }
  componentDidMount() {
  //ACTION_ITEM 3 LOADINGCOMPONENT => PULL 3 POSTS AND RENDER LOADING COMPONENT OUT OF VIEW, WHEN LOADING COMPONENT REF IS VISIBLE, UPDATE POSTLIST WITH ADDITIONAL POSTS
    this.postCheck()
    
    if (this.loading) {
      this.props.fetchPosts().then( posts => {
      if (!this.props.blogOpen) {
          this.setState({
            allPosts: Object.assign({}, this.state.allPosts, posts.posts), 
            posts_by_Id: Object.keys(posts.posts),
            isFetched: false})
            this.loading = false
        }
      })
    }
    if (!this.props.blogOpen) this.contentToFetch()

    this.state.blogFetchList.forEach(blog_id => this.props.fetchBlogsPosts(blog_id))
}
  componentDidUpdate() {
    if (!this.props.blogOpen && !this.state.isFetched) {
      this.contentToFetch()
      this.setState({allPosts: this.props.allPosts})
    }
    this.postCheck()
  }
  componentWillUnmount() {
    this.postCheck()
    
    // if (!this.state.blogOpen) this.contentToFetch()
  }

  contentToFetch(){
    let authorList = []
    
    this.state.posts_by_Id.forEach(key => {
      let author_id = this.state.allPosts[key].user_id
      
      if (!this.state.users[author_id] 
        && !authorList.includes(author_id) 
        && !this.state.userFetchList.includes(author_id)) {
          
          authorList.push(author_id)

      }
    })

    authorList.forEach(author => {
      this.props.fetchUser(author)
      this.props.fetchBlog(author)
    })
    this.setState({
      isFetched: true, userFetchList: authorList,
        blogFetchList: authorList})

    this.loading = false
  }

  render() { 
    let { deletePost, fetchUser, 
            users_by_Id, blogs_by_Id, fetchBlog, posts } = this.props;
    let postFeed = Object.keys(this.props.posts).length > 0 ? 
        Object.values(this.props.posts) : this.state.posts
    this.postCheck()
    

    if (this.loading && this.state.isFetched === false) {
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
          // ACTION_ITEM 2 ADD PROFILE_URLS_BY_ID OBJ TO STATE, REF OFF POST/USER
        
        Object.values(posts).map((post, i) => {
          return <Post post={post} 
                      blogOpen={this.props.blogOpen}
                      key={`${post.id}${post.username}${i}`} />
              }
            )
          }
        </ul>
    
      </div>
    )

  }
}
export default PostIndex