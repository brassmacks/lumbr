import React from 'react';
import { Route, 
  Redirect,
  Switch,
  Link,
  HashRouter
  } from 'react-router';

import SignupFormContainer from './session_form/SignupFormContainer';
import LoginFormContainer from './session_form/LoginFormContainer';
import GreetingContainer from "./greeting/greeting_container"
const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
    
  </div>
);

export default App;