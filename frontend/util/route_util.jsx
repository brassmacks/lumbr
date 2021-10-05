import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRoute, withRouter } from 'react-router-dom'

const Auth = ({ component: Component, path, loggedIn, exact}) => (
// const Auth = ({ component: Component, path, loggedIn, exact, freeze }) => (
  // <Route path={path} exact={exact} freeze={freeze} render={(props) => (
  <Route path={path} exact={exact} render={(props) => (
    !loggedIn ? 
      (
        <Component {...props} /> 
      ) : (
        <Redirect to="/dashboard" {...props} />
      ) 
    )} /> 
);

// const Protected = ({ component: Component, path, loggedIn, exact, freeze, melt }) => {
const Protected = ({ component: Component, path, loggedIn, exact }) => {
  // remove melt if unneeded
  return(
  // <Route path={path} exact={exact} freeze={freeze} melt={melt} render={ props => (
  <Route path={path} exact={exact} render={ props => (
    loggedIn ?
      (
        // <Component freeze={freeze} melt={melt} {...props} />
        <Component {...props} />
        
      ) : (
        <Redirect to="/login" />
      )
      
  )} />
)};

const mSTP = state => ({
  loggedIn: Boolean(state.session.id) 
  });

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));