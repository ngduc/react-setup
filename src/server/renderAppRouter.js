import { match } from 'react-router'
import Transmit from 'react-transmit'

import routes from '../containers/routes'
import { renderIndexPage } from './libs/index-page'
import { getLocaleMessages } from './libs/i18n'
import { createRouterContextDataWrapper } from './libs/RouterContextDataWrapper'

const hostname = process.env.HOSTNAME || 'localhost'
const IGNORED_FILES = ['/favicon.ico']
const webpackPort = 8199
const webpackHash =
  (typeof __webpack_hash__ === 'function' ? __webpack_hash__() : __webpack_hash__) // eslint-disable-line camelcase

export default function renderAppRouter () {
  return (ctx, next) => new Promise((resolve, reject) => {
    const location = ctx.request.url

    if (IGNORED_FILES.indexOf(location) >= 0) {
      return next()
    }
    const locale = ctx.query.locale || ctx.session.locale || 'en-US'
    ctx.session.locale = locale

    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        ctx.redirect(redirectLocation.pathname + redirectLocation.search, '/')
        resolve()
        return next()
      }
      if (error || !renderProps) {
        resolve()
        return next()
      } else {
        const webserver = (__PRODUCTION__ ? '' : '//' + hostname + ':' + webpackPort)
        const RouterContextDataWrapper = createRouterContextDataWrapper({ i18nData: getLocaleMessages(locale) })

        Transmit.renderToString(RouterContextDataWrapper, renderProps).then(({ reactString, reactData }) => {
          const renderedHtml = renderIndexPage(locale, reactString)
          const output = Transmit.injectIntoMarkup(
            renderedHtml, reactData, [`${webserver}/client.js?${webpackHash}`]
          )
          ctx.body = output
          resolve()
        })
      }
    })
  })
}
