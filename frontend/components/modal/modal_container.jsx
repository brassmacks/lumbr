import React from 'react';
import Modal from './modal_component';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BlogEdit from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'
import { fetchBlog } from '../../actions/blog_actions';
import BlogShow from '../blog/blog_show_container';
import DeletePst from '../buttons/delete_post';
import EditPostForm from '../posts/edit_post_form_container';
import { fetchPosts, fetchBlogsPosts } from '../../actions/post_actions';
import { render } from 'react-dom';



const mapStateToProps = (state, ownProps) => {
  // if (!ownProps.modal) return {modal:{type: null}}
  let modal = state.modal || { modal: { type: null } } 
  let author_id = state.modal.blog || state.session.id;
  let currentUser = state.entities.users[state.session.id]
  let post_id = state.modal.type === "edit post" || state.modal.type === "edit repost" ? state.modal.blog : null
  let post = state.entities.posts[post_id] || null
  if (post) {
    post.username = currentUser.username
    post.user_id = currentUser.id
  }
  
  let blogs = state.entities.blogs || null
  let blog =  blogs ? state.entities.blogs[author_id] : null


  return {
    currentUser: currentUser,
    blogs: state.entities.blogs,
    blog: blog,
    blogContent: blog,
    author: state.entities.users[author_id],
    modal: modal,
    isFetched: false,
    post_id: post_id,
    post: post
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: post_id => dispatch(fetchPost(post_id)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchBlogsPosts: blog_id => dispatch(fetchBlogsPosts(blog_id)),
    fetchBlog: (id) => dispatch(fetchBlog(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);