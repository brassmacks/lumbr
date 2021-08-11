import React from 'react';
import { PostIndexItem } from './post_index_item';

class PostIndex extends React.Component {
  constructor(props){
    super(props)
  }
  
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts, deletePost, fetchUser } = this.props;

    return (
      <div id="post-index-wrapper">
        <ul id="post-index-list">
          
          {
          
            posts.map(post => {
              return <PostIndexItem 
                post={post}
                deletePost={deletePost}
                key={post.id} />
              }
            )
          }
        </ul>
    
      </div>
    )

  }
}
export default PostIndex