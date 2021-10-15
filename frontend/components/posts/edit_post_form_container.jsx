import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import PostIndex from './post_index';
import { closeModal } from '../../actions/modal_actions';


const mSTP = (state, ownProps) => {

  let currentUser = state.entities.users[state.session.id]
    let post = {
    title: ownProps.fullPost.title,
    body: ownProps.fullPost.body,
    source: null,
    user_id: currentUser.id,
    contentType: ownProps.fullPost.contentType,
    photoFile: ownProps.fullPost.photoFile,
    urlInput: ownProps.fullPost.urlInput,
    tagString: ownProps.fullPost.tagString,
    mediaAttached: ownProps.fullPost.mediaAttached,
  }
  post.source = ownProps.repost ? ownProps.fullPost.username : null
  let type = ownProps.repost ? 'Repost' : 'Update'
  return{
    postDraft: post,
    postId: ownProps.post,
    fullPost: ownProps.fullPost,
    currentUser: state.entities.users[state.session.id],
    user_id: state.session.id,
    type: type,
    formType: type
}};

const mDTP = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  fetchPost: postId => dispatch(fetchPost(postId)),
  postAction: post => dispatch(updatePost(post))
});

export default connect(mSTP,mDTP)(PostForm)
