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
import DashboardContainer from './dashboard/dashboard_container'
import PostForm from './posts/create_post_form_container'
import Modal from './modal/modal_container';
import Splash from './splash/splash_container'
import PostShowContainer from "./posts/post_show_container"
import PostIndexContainer from './posts/post_index_container'
import Dashboard from './dashboard/dashboard';
import { render } from 'react-dom';

const App = () => (
  
  <div>
    <Modal />
    <BannerContainer />
    <Splash />
    <AuthRoute exact path="/" component={Modal} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />  
    <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
    {/* <ProtectedRoute exact path="/new" component={PostForm} />
    <ProtectedRoute exact path="/new/text" component={PostForm} />
    <ProtectedRoute exact path="/new/quote" component={PostForm} />
    <ProtectedRoute exact path="/new/photo" component={PostForm} />
    <ProtectedRoute exact path="/new/link" component={PostForm} />
    <ProtectedRoute exact path="/new/video" component={PostForm} /> */}
    
    
    
  </div>
);

export default App;