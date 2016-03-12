import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'

import '../baseStyles.css'

import enLocaleData from 'react-intl/locale-data/en'
import jaLocaleData from 'react-intl/locale-data/ja'
addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)

let translations
let currentLocale
let messages

if (!__CLIENT__) {
  const i18n = require('server/libs/i18n')
  translations = i18n.getTranslations()
}

export default class App extends React.Component {
  componentWillMount() {
    if (__CLIENT__) {
      currentLocale = (__CLIENT__ ? window.App.locale : 'en-US')
      messages = window.App.messages
    } else {
      currentLocale = this.props.location.query.locale || 'en-US'
      messages = translations[ currentLocale ]
    }
    addLocaleData({
      locale: currentLocale,
      parentLocale: currentLocale.split('-')[0]
    })
  }

  render() {
    return (
      <IntlProvider locale={currentLocale} defaultLocale="en-US" messages={messages}>
        <div>
          {this.props.children}
        </div>
      </IntlProvider>
    )
  }
}
