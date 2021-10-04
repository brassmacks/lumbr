
import { connect } from 'react-redux';
import PostIndex from './post_index';
import { openModal } from '../../actions/modal_actions';
import { fetchBlog } from '../../actions/blog_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
  let posts_by_Id = Object.keys(state.entities.posts)
  let allPosts = state.entities.posts
  let postsFeedList = posts_by_Id.slice(posts_by_Id.length - 11, posts_by_Id.length)
  let posts = postsFeedList.map(postId => allPosts[postId])
  let users = state.entities.users
  let blogs = state.entities.blogs
  if (ownProps.blogOpen) posts = ownProps.posts
  let users_by_Id = Object.keys(state.entities.users)
  let blogs_by_Id = Object.keys(state.entities.blogs)  
    return {
      // ACTION_ITEM CONTAINERIZE REPEATED CODE BLOCKS INTO FUNCTIONS
      users: users,
      users_by_Id: users_by_Id,
      blogs: blogs,
      blogs_by_Id: blogs_by_Id,
      currentUser: state.entities.users[state.session.id],
      posts: posts,
      allPosts: allPosts,
      posts_by_Id: posts_by_Id,
      freeze: ownProps.freeze,
      blogOpen: ownProps.blogOpen,
      isFetched: false
            }
  }


const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  fetchUser: user_id => dispatch(fetchUser(user_id))
})

export default connect(mSTP,mDTP)(PostIndex) 
