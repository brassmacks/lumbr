import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostForm from './post_form';
import { fetchPost, createPost } from '../../actions/post_actions';
import PostIndex from './post_index';
import { closeModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {
  // ACTION_ITEM MAKE POST DRAFT OBJECT AND USE IT TO POPULATE AGAINST TYPE
  return {
    postId: ownProps.post,
    fullPost: ownProps.fullPost,
    currentUser: state.entities.users[state.session.id],
    type: 'Repost',
    formType: 'Repost'
  }
};

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  fetchPost: postId => dispatch(fetchPost(postId)),
  postAction: post => dispatch(createPost(post))
});

export default connect(mSTP, mDTP)(PostForm)
