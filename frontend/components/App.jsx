import React from 'react';
import SignupFormContainer from './session_form/SignupFormContainer';
import LoginFormContainer from './session_form/LoginFormContainer';
import GreetingContainer from "./greeting/greeting_container"
const App = () => (
  <div>
    
    <LoginFormContainer />
    <GreetingContainer />
  </div>
);

export default App;