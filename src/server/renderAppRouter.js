import React from 'react'
import { RouterContext, match } from 'react-router'
import Transmit from 'react-setup-transmit'

import routes from '../containers/routes'

const hostname = process.env.HOSTNAME || 'localhost'
const IGNORED_FILES = ['/favicon.ico']

import { renderIndexPage, getTrackingHtml } from './libs/index-page'
import { createRouterContextDataWrapper } from './libs/RouterContextDataWrapper'
import { getLocaleMessages } from './libs/i18n'
let i18nData = { locale: '', messages: {} }


export default function renderAppRouter () {
  return (ctx, next) => new Promise((resolve, reject) => {
    const location = ctx.request.url
    console.log('- location: ' + location)

    if (IGNORED_FILES.indexOf(location) >= 0) {
      return next()
    }

    const locale = ctx.query.locale || ctx.session.locale || 'en-US'
    ctx.session.locale = locale
    i18nData = getLocaleMessages(locale)
    const i18nDataString = JSON.stringify(i18nData)

    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        ctx.redirect(redirectLocation.pathname + redirectLocation.search, '/')
        resolve()
        return next()
      }
      else if (error || !renderProps) {
        resolve()
        return next()
      }
      else {
        const webserver = (__PRODUCTION__ ? '' : '//' + hostname + ':8080')
        const RouterContextDataWrapper = createRouterContextDataWrapper({ i18nData })
        console.log('- webserver: ' + webserver)

        Transmit.renderToString(RouterContextDataWrapper, renderProps).then(({ reactString, reactData }) => {
          const renderedHtml = renderIndexPage({
            i18nDataString,
            reactString,
            trackingCode: getTrackingHtml()
          })
          const output = Transmit.injectIntoMarkup(renderedHtml, reactData, [`${webserver}/client.js`])
          ctx.body = output
          resolve()
        })
      }
    })
  })
}
