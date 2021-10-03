import { connect } from 'react-redux';
import { Blog } from './blog';
import { withRouter } from 'react-router';
import { fetchBlog } from '../../actions/blog_actions';
import { closeModal } from '../../actions/modal_actions';

const mSTP = (state, ownProps) => {
  console.log('state inside blogshow', state)
  console.log('props inside blogshow', ownProps)
  
  // ACTION_ITEM REFACTOR INTO FEED LOAD 
  // (function(){ 
  //   ownProps.blog.posts.forEach(post_key => {
  //     if (state.entities.posts[post_key]) {
  //       postList.push(state.entities.posts[post_key])
  //     } 
  //   })
  //   if (postList.length < 5 && ownProps.blog.posts.length != postList.length) {
  //     console.log('inside anonfunc blogshow')
  //     ownProps.fetchBlogsPosts(ownProps.author.id)
  //   }
  // })() 
  return {
  posts: state.entities.posts,
  blog: ownProps.blog,
  author: ownProps.author,
  
  // author: ownProps.author,
  // blog: state.entities.blogs[ownProps.author[user_id]]
  // change to params ownprops userid
}}
const mDTP = dispatch => ({
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  closeModal: () => dispatch(closeModal()) 
})

export default withRouter(connect(mSTP, mDTP)(Blog))