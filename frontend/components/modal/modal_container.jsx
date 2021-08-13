import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Blog from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  console.log('in')
  switch (modal) {
    case 'edit blog':
      component = <Blog />;
      break;
    case 'new Text post':
      component = <CreatePostContainer />
      break;
    default:
      console.log("out")
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <h1>here</h1>

        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
