import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import { render } from 'react-dom';

class EditPostForm extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const { action, formType, post } = this.props;

    if (!post) return null;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post}
        />
    );
  }
}

const mSTP = (state, ownProps) => ({
  post: state.entities.post[ownProps.match.params.postId],
  formType: 'Update Post'
});

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  action: post => dispatch(updatePost(post))
});

export default connect(mSTP,mDTP)(EditPostForm)
