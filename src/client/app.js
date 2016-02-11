window.__CLIENT__ = true;
window.__SERVER__ = false;

import 'babel/polyfill';
import React from 'react';
import { Provider } from 'react-redux';

import create from '../shared/store';
import * as reducers from '../shared/reducers';
import CounterApp from '../shared/apps';

const state = window.__initialState;
const store = create(reducers, state);

React.render(
  <Provider store={store}>
    {()=><CounterApp />}
  </Provider>,
  document.getElementById('App')
);
