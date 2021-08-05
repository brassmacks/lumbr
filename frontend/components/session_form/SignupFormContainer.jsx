import React from 'react'
import { connect } from 'react-redux'
import { signup } from '../../actions/session_actions'
import  SessionForm from './SessionForm'




const mSTP = ({ errors }) => ({
  errors: Object.values(errors.session),
  formType: 'signup'
})

const mDTP = dispatch => ({
  processForm: (user) => dispatch(signup(user))
})


export default connect(mSTP, mDTP)(SessionForm)