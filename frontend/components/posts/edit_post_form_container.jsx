import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';


class EditPostForm extends React.Component {

  componentDidMount() {
    // this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const { action, formType, post } = this.props;

    if (!post) return null;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post}
        currentUser={this.props.currentUser}
        />
    );
  }
}

const mSTP = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  post: state.entities.posts[ownProps.post],
  formType: 'Update Post'
});

const mDTP = dispatch => ({
  fetchPost: postId => dispatch(fetchPost(postId)),
  action: post => dispatch(updatePost(post))
});

export default connect(mSTP,mDTP)(EditPostForm)
