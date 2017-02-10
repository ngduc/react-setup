require('babel-polyfill')
require('server/libs/node-locales')

import Koa from 'koa'
import Router from 'koa-router'
import koaStaticCache from 'koa-static-cache'
import koaConvert from 'koa-convert'
import koaCompress from 'koa-compress'
import koaBetterBody from 'koa-better-body'
import koaSession from 'koa-session'
import zlib from 'zlib'

import apiRouter from './server/apiRouter'
import renderAppRouter from './server/renderAppRouter'

const log = require('bunyan').createLogger({ name: 'app' })
const hostname = process.env.HOSTNAME || 'localhost'
const port = process.env.PORT || 8100

try {
  const app = new Koa()
  app.keys = ['seekreet', 'r3act-s3tup-k3y']

  app.use(koaCompress({ flush: zlib.Z_SYNC_FLUSH }))
  app.use(koaConvert(koaStaticCache('static', { gzip: true, maxAge: 14 * 24 * 60 * 60 }))) // 2 weeks
  app.use(koaConvert(koaSession(app)))
  app.use(koaBetterBody({ textLimit: '5mb', formLimit: '5mb', jsonLimit: '5mb' }))

  app.use(apiRouter())

  const router = new Router()
  router.get('/(.*)', renderAppRouter())
  app.use(router.routes())

  // Enable this for HTTP2 & HTTPS (Heroku doesn't support free dyno with https - https://goo.gl/mS708W)
  if (process.env.npm_package_config_protocol === 'https') {
    const http2 = require('spdy') // eslint-disable-line global-require
    const fs = require('fs') // eslint-disable-line global-require
    const options = {
      key: fs.readFileSync('./configs/server-key.pem', 'utf8'),
      cert: fs.readFileSync('./configs/server.crt', 'utf8')
    }
    const http2App = http2.createServer(options, app.callback())
    http2App.listen(port, () => {
      log.info('==> 🌎  Server is up at https://%s:%s ===', hostname, port)
    })
  } else {
    app.listen(port, () => {
      log.info('==> 🌎  Server is up at http://%s:%s ===', hostname, port)
    })
  }

  if (__DEV__) {
    if (module.hot) {
      log.info('[HMR] Waiting for server-side updates')

      module.hot.accept('containers/routes', () => {
        require('containers/routes') // eslint-disable-line global-require
      })
      module.hot.addStatusHandler((status) => {
        if (status === 'abort') {
          setTimeout(() => process.exit(0), 0)
        }
      })
    }
  }
} catch (error) {
  log.error(error.stack || error)
}
