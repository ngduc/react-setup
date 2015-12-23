import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { addLocaleData, IntlProvider } from 'react-intl';
import enLocaleData from '../../node_modules/react-intl/lib/locale-data/en';

import style from './App.css';

addLocaleData(enLocaleData);
addLocaleData({
    locale: 'ja-JP',
    parentLocale: 'ja',
});

export default class App extends React.Component {
  render() {
    return (
      <IntlProvider locale={'ja-JP'}>
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
