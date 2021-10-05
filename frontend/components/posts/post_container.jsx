import { connect } from "react-redux";
import { openModal } from "../../actions/modal_actions";
import Post from "./post";
import { fetchBlog } from '../../actions/blog_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';


const mSTP = (state, ownProps) => {

  let post = ownProps.post
  let currentUser = state.entities.users[state.session.id]
  let author = ownProps.post.user_id

  let tags = ownProps.post.tags || [];
  return {
  post: post,
  currentUser: currentUser,
  author: author,
  tags: tags,
  blogOpen: ownProps.blogOpen,
  // ACTION_ITEM: CONVERT TO FETCH TAGS FROM STATE=>OWNPROPS.POST.TAGS.MAP
  editable: currentUser.id === author,
  // freeze: ownProps.freeze,
}}
const mDTP = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  deletePost: postId => dispatch(deletePost(postId)),
  fetchBlog: userId => dispatch(fetchBlog(userId)),
  openModal: (modal, data) => dispatch(openModal(modal, data)),
  fetchUser: user_id => dispatch(fetchUser(user_id))
})

export default connect(mSTP, mDTP)(Post)