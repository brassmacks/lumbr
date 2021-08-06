import React from 'react';
import { Route, 
  Redirect,
  Switch,
  Link,
  HashRouter
  } from 'react-router-dom';

import SignupFormContainer from './session_form/SignupFormContainer';
import LoginFormContainer from './session_form/LoginFormContainer';
import BannerContainer from "./banner/banner_container"
import { AuthRoute, ProtectedRoute  } from '../util/route_util';
import PostShowContainer from "./posts/post_show_container"
import PostIndexContainer from './posts/post_index_container'
import DashboardContainer from './dashboard/dashboard_container'
const App = () => (

  <div>
    <BannerContainer />
    
    
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />  
    <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
    <PostIndexContainer />
    
  </div>
);

export default App;