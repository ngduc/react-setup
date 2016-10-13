import Router from 'koa-router'

export default function () {
  const router = new Router()

  router.get('/api-proxy/(.*)', async (ctx) => {
    const urlParams = ctx.request.url.replace(/\/api\-proxy/, '')
    /* --- comment this out to use jsonplaceholder's API example:
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
      json = [ { id: 1, body: 'Comment 1' }, { id: 2, body: 'Comment 2' } ]
    } else {
      json = { id: 1, title: 'My first blog post' }
    }
    ctx.body = json
  })

  /* - More examples:
  router.get('/api/count', async (ctx, next) => {
    ctx.body = serverCount
  })
  router.post('/api/count/inc', async (ctx, next) => {
    ctx.body = ++serverCount
  })
  */

  return router.routes()
}
