import fs from 'fs'
import mustache from 'mustache'
import React from 'react'
import { RouterContext, match } from 'react-router'
import Transmit from 'react-transmit'

import routes from '../containers/routes'

const hostname = process.env.HOSTNAME || 'localhost'
const IGNORED_FILES = ['/favicon.ico']
const INDEX_TEMPLATE_FILE = 'dist/views/index.tpl.html'

const indexFileContent = fs.readFileSync(INDEX_TEMPLATE_FILE).toString()

import { createRouterContextDataWrapper } from './libs/RouterContextDataWrapper'
const i18n = require('./libs/i18n')
let i18nData = { locale: '', messages: {} }


export default function renderAppRouter () {
  return (ctx, next) => new Promise((resolve, reject) => {
    const location = ctx.request.url
    if (IGNORED_FILES.indexOf(location) >= 0) {
      return next()
    }

    const locale = ctx.query.locale || 'en-US'
    // ctx.session.locale = locale
    i18nData = i18n.getLocaleMessages(locale)
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

        Transmit.renderToString(RouterContextDataWrapper, renderProps).then(({ reactString, reactData }) => {
          const renderedHtml = mustache.render(indexFileContent, {
            i18n: i18nDataString,
            reactString
          })
          const output = Transmit.injectIntoMarkup(renderedHtml, reactData, [`${webserver}/client.js`])
          ctx.body = output
          resolve()
        })
      }
    })
  })
}
