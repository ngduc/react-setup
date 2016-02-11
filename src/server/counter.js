import React from 'react';
import nunjucks from 'nunjucks';
import { Provider } from 'react-redux';

import create from '../shared/store';
import * as reducers from '../shared/reducers';
import { loadCounter } from '../shared/actions';
import CounterApp from '../shared/apps';

nunjucks.configure('views', { autoescape: true });

export default function counter() {
  return async (ctx, next) => {
    const store = create(reducers);
    await store.dispatch(loadCounter());
    const state = store.getState();

    const appString = React.renderToString(
      <Provider store={store}>
        {() => <CounterApp {...state} />}
      </Provider>
    );

    ctx.body = nunjucks.render('index.html', {
      appString,
      initialState: JSON.stringify(state),
      env: process.env
    });
  };
}
