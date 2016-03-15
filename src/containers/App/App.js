import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'

import '../baseStyles.css'

import enLocaleData from 'react-intl/locale-data/en'
import jaLocaleData from 'react-intl/locale-data/ja'
addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)

let currentLocale
let messages

export default class App extends React.Component {
  componentWillMount () {
    if (__CLIENT__) {
      currentLocale = (__CLIENT__ ? window.App.locale : 'en-US')
      messages = window.App.messages
    } else {
      currentLocale = this.context.data.i18nData.locale || 'en-US'
      messages = this.context.data.i18nData.messages || {}
    }
    addLocaleData({
      locale: currentLocale,
      parentLocale: currentLocale.split('-')[0]
    })
  }

  render () {
    return (
      <IntlProvider locale={currentLocale} defaultLocale="en-US" messages={messages}>
        <div>
          {this.props.children}
        </div>
      </IntlProvider>
    )
  }
}

App.contextTypes = {
  data: React.PropTypes.object
}
