import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { addLocaleData, IntlProvider } from 'react-intl';

import enLocaleData from '../../node_modules/react-intl/lib/locale-data/en';
import jaLocaleData from '../../node_modules/react-intl/lib/locale-data/ja';

import style from './App.css';

addLocaleData(enLocaleData);
addLocaleData(jaLocaleData);

const currentLocale = window.App.locale; // injected in index.tpl.html
const messages = window.App.messages;
addLocaleData({
  locale: currentLocale,
  parentLocale: currentLocale.split('-')[0]
});

export default class App extends React.Component {
  render() {
    return (
      <IntlProvider locale={currentLocale} messages={messages}>
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
