import React from 'react'
import Blog from '../blog/blog_edit_container'

export const Modal = ({modal, closeModal}) => {
  if (!modal) return null;
  
  let component;
  switch (modal) {
    case 'blog edit':
      component = <Blog />
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}
