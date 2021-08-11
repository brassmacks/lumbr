import React from 'react'
import LoginFormContainer from '../session_form/LoginFormContainer';
import SignupFormContainer from '../session_form/SignupFormContainer';

export const Modal = ({modal, closeModal}) => {
  if (!modal) return null;
  
  let component;
  switch (modal) {
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'login':
      component = <LoginFormContainer />
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
