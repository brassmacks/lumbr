import React from 'react'
import { connect } from 'react-redux'
import { login } from '../../actions/session_actions'
import SessionForm  from './SessionForm'




const mSTP = ({ errors }) => ({
  errors: Object.values(errors.session),
  formType: 'login'
})

const mDTP = dispatch => ({
  processForm: (user) => dispatch(login(user))
  
})


export default connect(mSTP, mDTP)(SessionForm)