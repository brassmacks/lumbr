import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BlogEdit from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'
import { fetchBlog } from '../../actions/blog_actions';
import BlogShow from '../blog/blog_show_container';
import DeletePst from '../buttons/delete_post';
import EditPostForm from '../posts/edit_post_form_container';
function Modal({ modal, closeModal, author, melt, blog}) {
  if (!modal) {
    return null;
  } 
  console.log('modal inside modal container', modal)
  

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
      console.log('props inside modal switch', blog, author)
      component = <BlogEdit blog={blog} author={author} />;
      break;
    case 'show blog':
      console.log('props inside modal switch', blog, author)      
      component = <BlogShow blog={blog} author={author}/>
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
  if (!state.modal.type) return {}
  console.log('state inside modal connect', state)
  console.log('props inside modal connect', ownProps)
  let author_id = state.modal.blog || state.session.id
  return {
    blog: state.entities.blogs[author_id],
    author: state.entities.users[author_id],
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
