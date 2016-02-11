import Koa from 'koa';
import Router from 'koa-router';

let serverCount = 0;

export default function () {
  let router = new Router();

  router.get('/api/count', async (ctx, next) => {
    ctx.body = serverCount;
  });
  router.post('/api/count/inc', async (ctx, next) => {
    ctx.body = ++serverCount;
  });
  router.post('/api/count/dec', async (ctx, next) => {
    ctx.body = --serverCount;
  });
  return router.routes();
}
