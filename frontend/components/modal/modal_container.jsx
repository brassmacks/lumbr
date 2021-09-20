import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import BlogEdit from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'
import { fetchBlog } from '../../actions/blog_actions';
import BlogShow from '../blog/blog_show_container';

function Modal( { modal, closeModal, author, melt}) {

  if (!modal) {
    return null;
  }

  let component;
  let background = "modal-background"
  
  const assignType = postType => (
    component = <CreatePostContainer melt={melt} type={postType} /> 
    )

  const close = () => {
    closeModal();
    melt();
    }
    
  switch (modal) {
    case 'edit blog':
      component = <BlogEdit />;
      break;
    case 'show blog':
      component = <BlogShow />
      break;
      case 'new Text post':
        assignType('Text')
      break;
    case 'new Photo post':
      assignType('Photo')
      break;
    case 'new Quote post':
      assignType('Quote')
      break;
    case 'new Video post':
      assignType('Video')
      break;
    case 'new Link post':
      assignType('Link')
      break;
    case 'post show':
      background="post-show-back"
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

const mapStateToProps = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],  
    modal: state.modal,
    melt: ownProps.melt
  });


const mapDispatchToProps = dispatch => {
  return {
    fetchBlog: (id) => dispatch(fetchBlog(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
