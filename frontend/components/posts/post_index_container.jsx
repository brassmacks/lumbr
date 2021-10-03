import { connect } from 'react-redux';
import PostIndex from './post_index';
import { openModal } from '../../actions/modal_actions';
import { fetchBlog } from '../../actions/blog_actions';
import { fetchPosts, deletePost } from '../../actions/post_actions';
import { fetchUser } from '../../actions/user_actions';

const mSTP = (state, ownProps) => {
  
  console.log('ownProps inside post container', ownProps)
  console.log('state inside post container', state)
  
  let post_keys = Object.keys(state.entities.posts)
  let posts = state.entities.posts
  if (ownProps.blogOpen) posts = ownProps.posts
  // let blogsPosts = {}
  let users_by_Id = Object.keys(state.entities.users).map(key => parseInt(key))
  let blogs_by_Id = Object.keys(state.entities.blogs).map(key => parseInt(key))
  let userFetchList = []
  let blogFetchList = []
  // ACTION_ITEM CREATE FEED METHOD THAT PASSES FETCH LISTS TO ACTIONS
  // REDUCE NUMBER OF API CALLS BY FETCHING IN SETS
  // let ensurePostsInBlog = (posts_by_user) => {
    
  //   postCount = posts.length - 1;
  //   for (let i = 0; i < 5; i++) {
  //     if (posts[posts_by_user[i]]) {
  //       Object.assign( blogsPosts, posts[posts_by_user[i]])
  //     } else {

  //     }
  //   }
      
  //   }
  
  let contentToFetch = () => {
    post_keys.forEach((key => {
    let author_id = parseInt(state.entities.posts[key].user_id)

    if (!users_by_Id.includes(author_id) 
      && !userFetchList.includes(author_id)) {
        userFetchList.push(author_id)
        ownProps.fetchUser(author_id)
        
      }
    if (!blogs_by_Id.includes(author_id) && 
        !blogFetchList.includes(author_id)) {
        blogFetchList.push(author_id)
        ownProps.fetchBlog(author_id)
      } 
    }
  ))
}
  if (!ownProps.blogOpen) contentToFetch()
  
    return {
      // ACTION_ITEM CONTAINERIZE REPEATED CODE BLOCKS INTO FUNCTIONS
      users_by_Id: users_by_Id,
      blogs_by_Id: blogs_by_Id,
      userFetchList: userFetchList,
      blogFetchList: blogFetchList,
      currentUser: state.entities.users[state.session.id],
      posts: posts,
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
