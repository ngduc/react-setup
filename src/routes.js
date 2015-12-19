import React from 'react';
import { Route } from 'react-router';
import App from './components/App';

import Home from './components/Home';
import About from './components/About';

const routes = (
  <Route component={ App }>
    <Route path="/" component={ Home }/>
    <Route path="/about" component={ About }/>
    // put other routes here...
  </Route>
);

export default routes;
