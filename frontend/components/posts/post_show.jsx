import React from 'react';
// import link to edit, delete, like, follow
// 
class PostShow extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    );
  }
}

export default PostShow;