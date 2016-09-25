import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './App/App'
import Home from './Home/Home'
import About from './About/About'

/**
 * The React Router routes for both the server and the client.
 */
module.exports = (
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
    </Route>
  </Router>
)
