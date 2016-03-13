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
const i18n = require('./libs/i18n')
const i18nObj = { locale: '', messages: {} }


export default function renderAppRouter () {
  return (ctx, next) => new Promise((resolve, reject) => {
    const location = ctx.request.url
    if (IGNORED_FILES.indexOf(location) >= 0) {
      return next()
    }
    i18nObj.locale = ctx.query.locale || 'en-US'
    const messagesJsonString = JSON.stringify(i18n.getLocaleMessages(i18nObj.locale))

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

        Transmit.renderToString(RouterContext, renderProps).then(({ reactString, reactData }) => {
          const renderedHtml = mustache.render(indexFileContent, {
            i18n: messagesJsonString,
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
