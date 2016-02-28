import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'

import '../baseStyles.css'

import enLocaleData from '../../../node_modules/react-intl/lib/locale-data/en'
import jaLocaleData from '../../../node_modules/react-intl/lib/locale-data/ja'

addLocaleData(enLocaleData)
addLocaleData(jaLocaleData)

const currentLocale = (__CLIENT__ ? window.App.locale : 'en-US') // injected in index.tpl.html
const messages = (__CLIENT__ ? window.App.messages : {})
addLocaleData({
  locale: currentLocale,
  parentLocale: currentLocale.split('-')[0]
})

export default class App extends React.Component {
  render() {
    return (
      <IntlProvider locale={currentLocale} messages={messages}>
        <div>
          {this.props.children}
        </div>
      </IntlProvider>
    )
  }
}
