import React from 'react'
import { connect } from 'react-redux'
import DummyButton from './Dummy_Signin'
import { login } from '../../actions/session_actions'


const mSTP = state => ({  
  user: { email: 'testeroni@test.com',
          password: 'testtest1212'}
})

const mDTP = dispatch => ({
  processForm: (user) => dispatch(login(user)),
})

export default connect(mSTP, mDTP)(DummyButton)