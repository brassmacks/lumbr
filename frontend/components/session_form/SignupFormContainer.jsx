import React from 'react'
import { connect } from 'react-redux'

import  SessionForm from './SessionForm'
import {signup, clearErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions'

const mSTP = ({ errors }) => ({
  errors: Object.values(errors.session),
  formType: 'Sign up'
})

const mDTP = dispatch => ({
  processForm: (user) => dispatch(signup(user)),
  otherForm: (
    <button id="signup-butt" className="authButts" onClick={() =>
      dispatch(openModal('login'))}>Log in
      </button>
  ),
  closeModal: () => dispatch(closeModal()),
  clearErrors: () => dispatch(clearErrors())
})

export default connect(mSTP, mDTP)(SessionForm)