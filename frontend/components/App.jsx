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
import { AuthRoute, ProtectedRoute  } from '../util/route_util';
import PostShowContainer from "./posts/post_show_container"

const App = () => (
  <div>
    <header>
      <GreetingContainer />
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    
    
  </div>
);

export default App;