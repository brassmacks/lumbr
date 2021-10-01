import React from 'react';
import { PostIndexItem } from './post_index_item';

class PostIndex extends React.Component {
  constructor(props){
    super(props)
    this.loading = true
    console.log(props, 'inside post index constructor')
    this.state = {
      userFetchList: [],
      blogFetchList: []
    }

  }
  
  componentDidMount() {
    // this.props.fetchPosts();
    this.props.fetchBlog(this.props.currentUser.id)
    this.loading = false
  }
  componentWillUnmount() {
    this.props.fetchPosts()
  }

  render() {
    let { posts, deletePost, fetchUser, 
            users_by_Id, blogs_by_Id, fetchBlog } = this.props;
    console.log('Blog_ids=', blogs_by_Id)
    console.log('User_ids=', users_by_Id)

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
            Object.values(posts).map((post,i) => {
              let author_id = parseInt(post.user_id)

            if (!users_by_Id.includes(author_id)
                  && !this.state.userFetchList.includes(author_id)) {
                      console.log('inside post index users by ID', author_id)
                      users_by_Id.push(author_id)
                      this.state.userFetchList.push(author_id)
                      fetchUser(author_id)
            }
            if (!blogs_by_Id.includes(author_id) 
                  && !this.state.blogFetchList.includes(author_id)) {
                      console.log('inside post index blogs by ID', author_id)
                      blogs_by_Id
                      this.state.blogFetchList.push(author_id)
                      fetchBlog(post.user_id)
            }
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