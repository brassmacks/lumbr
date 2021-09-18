import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Blog from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'
import { fetchBlog } from '../../actions/blog_actions';

function Modal( { modal, closeModal, currentUser,melt}) {

  if (!modal) {
    return null;
  }

  let component;
  
  const assignType = postType => (
    component = <CreatePostContainer melt={melt} type={postType} /> 
    )

  const close = () => {
    closeModal();
    melt();
    }

  switch (modal) {
    case 'edit blog':
      component = <Blog />;
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
    default:
      return null;
      // return loading modal
  }

  
  return (
    <div className="modal-background" onClick={ () => close()}>
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
