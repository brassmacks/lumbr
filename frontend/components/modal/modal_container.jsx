import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BlogEdit from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'
import { fetchBlog } from '../../actions/blog_actions';
import BlogShow from '../blog/blog_show_container';
import DeletePst from '../buttons/delete_post';
import EditPostForm from '../posts/edit_post_form_container';
import { fetchPosts, fetchBlogsPosts } from '../../actions/post_actions';


function Modal({ modal, closeModal, 
                author, melt, blog, 
                currentUser, fetchPost, fetchBlogsPosts}) {
  if (!modal) {
    fetchBlog(currentUser)
    fetchPosts()
    return null;
  } 
  let component;
  let background = "modal-background"
  
  const close = () => {
    closeModal();
    melt();
    }

  const assignType = (postType, formType = postType) => (

    component = <CreatePostContainer
      // melt={melt} 
      type={postType} 
      formType={formType}
      closeForm={close}/> 
    )

    
  switch (modal.type) {

    case 'edit blog':
      component = <BlogEdit blog={blog} author={author} />;
      break;
    case 'show blog':    
      component = <BlogShow blog={blog} author={author} fetchPost={fetchPost} fetchBlogsPosts={fetchBlogsPosts} />;
      break;

    case 'new Text post':
      assignType('Text')
      break;
    case 'new Photo post':
      assignType('Media', 'Photo')
      break;
    case 'new Video post':
      assignType('Media', 'Video')
      break;
    case 'new Quote post':
      assignType('Text', 'Quote')
      break;
    case 'new Link post':
      assignType('Link')
      break;
    case 'post show':
      
      break;
    case 'share post':
      component=<h1>share</h1>
      break;
    case 'edit repost':
      component={}
      break;
    case 'edit post':
      // ACTION_ITEM REFACTOR DATA ON THREAD TO POST THROUGH MODAL
      component=<EditPostForm post={modal[1]} closeForm={close}/>
      break;
    case 'delete post':
      // ACTION_ITEM REFACTOR DATA ON THREAD TO POST THROUGH MODAL
      component= <DeletePst close={close} post={modal[1]} />

      break;
    
    default:
      return null;
      // return loading modal
  }

  
  return (
    <div className={background} onClick={ () => close()}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>

        {component}
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  // ACTION_ITEM REFACTOR:
    // PASS MODAL FETCH FEED FROM APP.JS
    // CALL IT HERE 
  if (!state.modal.type) return {}
  let author_id = state.modal.blog ? state.modal.blog : state.session.id
  let blog = state.entities.blogs[author_id];
  
  return {
    currentUser: state.entities.users[state.session.id],
    blog: blog,
    author: state.entities.users[author_id],
    modal: state.modal,
    melt: ownProps.melt
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: post_id => dispatch(fetchPost(post_id)),
    fetchPosts: () => dispatch(fetchPosts),
    fetchBlogsPosts: blog_id => dispatch(fetchBlogsPosts(blog_id)),
    fetchBlog: (id) => dispatch(fetchBlog(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
