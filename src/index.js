import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import "./index.css"

//added to get Redux working
// import { Router, Route } from 'react-router';
// import {  browserHistory, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from "react-redux"
import Store from "./Store"

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)
registerServiceWorker()
