import React from 'react';
import { PostIndexItem } from './post_index_item';

class PostIndex extends React.Component {
  constructor(props){
    super(props)
    this.loading = true
    console.log(props)
  }
  
  componentDidMount() {
    // this.props.fetchPosts();
    this.loading = false
  }

  render() {
    const { posts, deletePost, fetchUser } = this.props;
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
          //TEST CHECK FUNCTIONALITY BLOG FETCH 
            Object.values(posts).map((post,i) => {
              let author_id = parseInt(post.user_id)
            if (!(this.props.users_by_Id.includes(author_id))) {
              this.props.users_by_Id.push(author_id)
              this.props.fetchUser(author_id)
            }
            if (!this.props.blogs_by_Id.includes(author_id)) {
              this.props.blogs_by_Id.push(author_id)
              this.props.fetchBlog(post.user_id)
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