import { connect } from 'react-redux';
import { Blog } from './blog';
import { withRouter } from 'react-router';
import { fetchBlog } from '../../actions/blog_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  // ACTION_ITEM 4 REFACTOR INTO FEED LOAD 
  // (function(){ 
  //   ownProps.blog.posts.forEach(post_key => {
  //     if (state.entities.posts[post_key]) {
  //       postList.push(state.entities.posts[post_key])
  //     } 
  //   })
  //   if (postList.length < 5 && ownProps.blog.posts.length != postList.length) {
  //     ownProps.fetchBlogsPosts(ownProps.author.id)
  //   }
  // })() 
  return {
  posts: state.entities.posts,
  blog: ownProps.blog,
  author: ownProps.author,
}}
const mDTP = dispatch => ({
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  closeModal: () => dispatch(closeModal()) 
})

export default withRouter(connect(mSTP, mDTP)(Blog))