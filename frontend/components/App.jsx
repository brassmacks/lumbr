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
import Modal from './modal/modal_container';
import Splash from './splash/splash_container'



import { render } from 'react-dom';
import { About } from './splash/about';
// const App = ({freeze, melt}) => (
const App = () => (

  <div id="app">
    <Modal />
    <BannerContainer />
    <Splash />
    {/* ACTION_ITEM BLOG SHOW ON ROUTE
     <Route exact path='blog/:id' /> 
    */}
    
    <AuthRoute exact path="/" component={Modal} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />  
    <ProtectedRoute exact path="/dashboard" component={DashboardContainer} />
    <Route exact path={["/", "/login", "/signup" ]} component={About} />
    
    
  </div>
);

export default App;