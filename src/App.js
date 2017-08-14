import React, { Component } from "react"
// import './App.css';

import Header from "./Header"
import Input from "./Input"
import Count from "./Count"
import { MyApp } from "./styled"

const App = () => {
  return (
    <MyApp>
      {/* <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to WebBoilerplate!</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p> */}
      <Header />
      <Input />
      <Count />
    </MyApp>
  )
}

export default App
