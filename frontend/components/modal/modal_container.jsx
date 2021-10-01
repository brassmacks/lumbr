import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BlogEdit from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'
import { fetchBlog } from '../../actions/blog_actions';
import BlogShow from '../blog/blog_show_container';
import DeletePst from '../buttons/delete_post';
import EditPostForm from '../posts/edit_post_form_container';
function Modal({ modal, closeModal, author, melt, blogs, blogId}) {
  if (!modal.type) {
    return null;
  } 
  console.log( modal, closeModal, author, melt, blogs, blogId )
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
      component = <BlogEdit />;
      break;
    case 'show blog':

      component = <BlogShow blog={blogs[modal.data]} author={author}/>
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
      component=<EditPostForm post={modal[1]} closeForm={close}/>
      break;
    case 'delete post':
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
  return {
    blogs: state.entities.blogs,
    currentUser: state.entities.users[state.session.id],  
    modal: state.modal,
    melt: ownProps.melt
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBlog: (id) => dispatch(fetchBlog(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
