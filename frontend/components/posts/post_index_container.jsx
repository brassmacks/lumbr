import { connect } from 'react-redux';
import PostIndex from './post_index';
import { openModal } from '../../actions/modal_actions';
import { fetchBlog } from '../../actions/blog_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
  let post_keys = Object.keys(state.entities.posts)
  let blogs = state.entities.blogs
  let posts = state.entities.posts
  if (ownProps.blogOpen) posts = ownProps.posts
  let users_by_Id = Object.keys(state.entities.users)
  let blogs_by_Id = Object.keys(state.entities.blogs)
  let userFetchList = []
  let blogFetchList = []
  let notFetched = true

  let contentToFetch = () => {
    console.log("inside contentToFetch")
    let authorList = [] 
    let users = state.entities.users
    let blogs = state.entities.blogs

    post_keys.forEach(key => {
      let author_id = state.entities.posts[key].user_id
      if (!authorList.includes(author_id)) authorList.push(author_id)
    }) 
    authorList.forEach(author => {
      ownProps.fetchUser(author)
      ownProps.fetchBlog(author)
    })  
    notFetched = false
  
  }
    

  
    return {
      // ACTION_ITEM CONTAINERIZE REPEATED CODE BLOCKS INTO FUNCTIONS
      users_by_Id: users_by_Id,
      blogs_by_Id: blogs_by_Id,
      userFetchList: userFetchList,
      blogFetchList: blogFetchList,
      currentUser: state.entities.users[state.session.id],
      posts: posts,
      blogs: blogs,
      freeze: ownProps.freeze,
      blogOpen: ownProps.blogOpen,
      contentToFetch: contentToFetch
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
