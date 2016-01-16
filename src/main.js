import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import attachFastClick from 'fastclick';

import routes from './app/routes';

// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body);

ReactDOM.render(
  <Router
    children={routes}
    history={browserHistory} />,
  document.getElementById('root')
);
