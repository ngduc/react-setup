import Koa from 'koa'
import Router from 'koa-router'
import fetch from 'isomorphic-fetch'

let serverCount = 0

export default function () {
  const router = new Router()

  router.get('/api-proxy/(.*)', (ctx, next) => new Promise((resolve, reject) => {
    const urlParams = ctx.request.url.replace(/\/api\-proxy/, '')
    /* --- comment this out to use jsonplaceholder's API:
    fetch('http://jsonplaceholder.typicode.com' + urlParams)
      .then(function(res) {
        if (res.status >= 400) {
          throw new Error('Bad res from server');
        }
        res.json().then(json => {
          ctx.body = json;
          resolve();
        });
      }) */
    let json
    if (urlParams.indexOf('comments') >= 0) {
      json = [ { id: 1 }, { id: 2 } ]
    } else {
      json = { title: 'My post title' }
    }
    ctx.body = json
    resolve()
  }))

  router.get('/api/count', async (ctx, next) => {
    ctx.body = serverCount
  })
  router.post('/api/count/inc', async (ctx, next) => {
    ctx.body = ++serverCount
  })
  router.post('/api/count/dec', async (ctx, next) => {
    ctx.body = --serverCount
  })

  return router.routes()
}
