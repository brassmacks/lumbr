import React from 'react'

export const Modal = ({modal, closeModal}) => {
  if (!modal) return null;
  
  let component;
  switch (modal) {

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
