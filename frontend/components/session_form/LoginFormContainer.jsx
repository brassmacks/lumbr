import React from 'react'
import { connect } from 'react-redux'

import { login, clearErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

import SessionForm  from './SessionForm'

const mSTP = ({ errors }) => ({
  errors: Object.values(errors.session),
  formType: 'login'
})

const mDTP = dispatch => ({
  processForm: (user) => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors()),
  otherForm: (
    <button id="signup-butt" className="authButts" onClick={() =>
       dispatch(openModal('signup'))}>Sign up
       </button>
  ),
  closeModal: () => dispatch(closeModal())
})


export default connect(mSTP, mDTP)(SessionForm)