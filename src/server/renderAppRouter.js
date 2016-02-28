import fs from 'fs'
import mustache from 'mustache'
import React from 'react'
import { RouterContext, match } from 'react-router'
import Transmit from 'react-transmit'

const i18n = require('../../tools/i18n')

import routesContainer from '../containers/routes'
const routes = routesContainer

const hostname = process.env.HOSTNAME || 'localhost'
const IGNORED_FILES = ['/favicon.ico']
const INDEX_TEMPLATE_FILE = 'dist/views/index.tpl.html'

const indexHtml = fs.readFileSync(INDEX_TEMPLATE_FILE).toString()
const i18nObj = { locale: '', messages: {} }


export default function renderAppRouter() {
  return (ctx, next) => new Promise((resolve, reject) => {
    if (IGNORED_FILES.indexOf(ctx.request.url) >= 0) {
      return next()
    }
    i18nObj.locale = ctx.query.locale || 'en-US'
    const messagesJsonString = i18n.getLocaleMessages(i18nObj.locale)


    match({ routes, location: ctx.request.url }, (error, redirectLocation, renderProps) => {
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
        const webserver = (process.env.NODE_ENV === 'production' ? '' : '//' + hostname + ':8080')

        Transmit.renderToString(RouterContext, renderProps).then(({ reactString, reactData }) => {
          const template = mustache.render(indexHtml, {
            i18n: messagesJsonString,
            reactString
          })
          const output = Transmit.injectIntoMarkup(template, reactData, [`${webserver}/client.js`])
          ctx.body = output
          resolve()
        })
      }
    })
  })
}
