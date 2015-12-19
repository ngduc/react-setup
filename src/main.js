import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import attachFastClick from 'fastclick';
import routes from './routes';

// Remove 300ms tap delay on mobile devices
attachFastClick.attach(document.body);

const history = createBrowserHistory();

ReactDOM.render(
  <Router
    children={routes}
    history={history} />,
  document.getElementById('root')
);
