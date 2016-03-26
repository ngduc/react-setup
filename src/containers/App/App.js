import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'

import { AppNavBar } from 'components'
import 'baseStyles.css'

import enLocaleData from 'react-intl/locale-data/en'
import jaLocaleData from 'react-intl/locale-data/ja'
addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)

let currentLocale = 'en-US'
let messages

export default class App extends React.Component {
  static contextTypes = {
    data: React.PropTypes.object
  }

  componentWillMount () {
    if (__CLIENT__) {
      currentLocale = window.App.locale
      messages = window.App.messages
    } else {
      if (this.context.data && this.context.data.i18nData) {
        currentLocale = this.context.data.i18nData.locale || 'en-US'
        messages = this.context.data.i18nData.messages || {}
      }
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
          <AppNavBar routerProps={this.props}/>

          {this.props.children}
        </div>
      </IntlProvider>
    )
  }
}

