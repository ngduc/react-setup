import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { IntlProvider } from 'react-intl';

import style from './App.css';

export default class App extends React.Component {
  render() {
    return (
      <IntlProvider locales={['en-US']}>
        <div className={style.app}>
          <nav>
            <span><Link to="/">Home</Link></span>
            <span><Link to="/about">About</Link></span>
          </nav>
          <div className={style.appBody}>
            {this.props.children}
          </div>
        </div>
      </IntlProvider>
    );
  }
}
