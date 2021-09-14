import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Redirect, withRoute, withRouter } from 'react-router-dom'

const Auth = ({ component: Component, path, loggedIn, exact, freeze }) => (
  <Route path={path} exact={exact} freeze={freeze} render={(props) => (
    !loggedIn ? 
      (
        <Component {...props} /> 
      ) : (
        <Redirect to="/dashboard" {...props} />
      ) 
    )} /> 
);

const Protected = ({ component: Component, path, loggedIn, exact, freeze }) => {
  return(
  <Route path={path} exact={exact} freeze={freeze} render={ props => (
    loggedIn ?
      (
        <Component freeze={freeze} {...props} />
        
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