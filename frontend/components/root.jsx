import React from "react"
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";

const Root = ({ store,}) => (
// const Root = ({ store, freeze, melt }) => (
  <Provider store ={store}>
    <HashRouter>
    {/* <App freeze={freeze} melt={melt} /> */}
    <App />
    </HashRouter>
  </Provider>
)
export default Root