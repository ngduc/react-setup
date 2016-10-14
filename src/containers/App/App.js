import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import { RouteTransition } from 'react-router-transition'
import { spring } from 'react-motion'

import { AppNavBar } from 'components'
import 'styles/styles.base.css'

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

          <RouteTransition
            pathname={this.props.location.pathname}
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: spring(1, { stiffness: 200, damping: 22 } ) }}
            atActive={{ opacity: spring(1, { stiffness: 200, damping: 22 } ) }}>

            {/* Component (which is mapped in "routes.js") will be loaded here. More props can also be passed in. */}
            {React.cloneElement(this.props.children, { ...this.props })}

          </RouteTransition>

        </div>
      </IntlProvider>
    )
  }
}

