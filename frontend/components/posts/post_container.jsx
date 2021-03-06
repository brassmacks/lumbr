import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import Post from "./post";
import { fetchBlog } from '../../actions/blog_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';
import { createFollow } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {

  let post = ownProps.post
  let currentUser = state.entities.users[state.session.id]
  let author = ownProps.post.user_id
  let tags = ownProps.post.tags || [];
  let avatar = state.entities.users[author] ? state.entities.users[author].profileUrl : post.profileUrl;
  
  return {

    followData: {
      id: state.session.id,
      follow: {
        user: ownProps.post.user_id
      }
    },

  author: author,
  post: post,
  currentUser: currentUser,
  author: author,
  tags: tags,
  blogOpen: ownProps.blogOpen,
  // ACTION_ITEM: 2.2 CONVERT TO FETCH TAGS FROM STATE=>OWNPROPS.POST.TAGS.MAP
  editable: currentUser.id === author,
  avatar: avatar
  // freeze: ownProps.freeze,
}}
const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  createFollow: followData => dispatch(createFollow(followData)),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  fetchUser: user_id => dispatch(fetchUser(user_id))
})

export default connect(mSTP, mDTP)(Post)