require('babel-polyfill')
require('server/libs/node-locales')

import Koa from 'koa'
import Router from 'koa-router'
import serveStatic from 'koa-serve-static'
import koaConvert from 'koa-convert'
import koaCompress from 'koa-compress'
import koaSession from 'koa-session'
import zlib from 'zlib'

import apiRouter from './server/apiRouter'
import renderAppRouter from './server/renderAppRouter'

const log = require('bunyan').createLogger({ name: 'app' })
const hostname = process.env.HOSTNAME || 'localhost'
const port = process.env.PORT || 8000


try {
  const app = new Koa()
  app.keys = ['seekreet', 'r3act-s3tup-k3y']

  app.use(koaCompress({ flush: zlib.Z_SYNC_FLUSH }))
  app.use(koaConvert(koaSession(app)))

  app.use(apiRouter())

  const router = new Router()
  router.get('/(.*)', renderAppRouter())
  app.use(router.routes())

  app.use(serveStatic('static', {}))

  app.listen(port, () => {
    log.info('==> ✅  Server is listening ===')
    log.info('==> 🌎  Go to http://%s:%s ===', hostname, port)
  })

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
