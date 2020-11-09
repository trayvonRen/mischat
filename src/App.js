import { HashRouter as Router, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import './App.scss'
import Login from 'pages/login'
import Register from 'pages/register'
import Main from 'pages/main'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Router path="/login">
            <Login />
          </Router>
          <Router path="/register">
            <Register />
          </Router>
          <Router path="/main">
            <Main />
          </Router>
          <Router path="/">
            <Redirect to="/login" />
          </Router>
        </Switch>
      </Router>
    </div>
  )
}

export default App
