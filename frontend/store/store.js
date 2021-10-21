import React from "react";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

export const configureStore = (preloadedState={}) => 
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk, logger)
    );

