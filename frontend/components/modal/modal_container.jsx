import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Blog from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'
import { fetchBlog } from '../../actions/blog_actions';

function Modal({ modal, closeModal, fetchBlog, currentUser }) {
  if (currentUser) fetchBlog(currentUser.id)
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'edit blog':
      component = <Blog />;
      break;
    case 'new Text post':
      component = <CreatePostContainer />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>

        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id],  
    modal: state.modal
  });


const mapDispatchToProps = dispatch => {
  return {
    fetchBlog: (id) => dispatch(fetchBlog(id)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
