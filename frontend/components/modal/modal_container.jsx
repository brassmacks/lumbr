import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import Blog from '../blog/blog_edit_container'
import CreatePostContainer from '../posts/create_post_form_container'
import { fetchBlog } from '../../actions/blog_actions';

function Modal( { modal, closeModal, currentUser,melt}) {
  console.log(modal)
  // if (currentUser) fetchBlog(currentUser.id)
  // if (modal == 'edit blog') fetchBlog(currentUser.id)
  if (!modal) {
    return null;
  }
  
  let component;

  const close = () => {
    closeModal();
    melt();
  }
console.log(modal)
  switch (modal) {
    case 'edit blog':
      component = <Blog />;
      break;
    case 'new Text post':
      component = <CreatePostContainer melt={melt} type={'Text'} />
      break;
    case 'new Photo post':
      component = <CreatePostContainer melt={melt} type={'Photo'} />
      break;
    case 'new Quote post':
      component = <CreatePostContainer melt={melt} type={'Quote'} />
      break;
    case 'new Video post':
      component = <CreatePostContainer melt={melt} type={'Video'} />
      break;

    default:
      return null;
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
