import koa from 'koa';
import bodyparser from 'koa-bodyparser';
import route from 'koa-route';
import compose from 'koa-compose';

let server_count = 0;

const app = koa()
  .use(bodyparser())
  .use(route.get('/api/count', function* () {
    this.body = server_count;
  }))
  .use(route.post('/api/count/inc', function* () {
    this.body = ++server_count;
  }))
  .use(route.post('/api/count/dec', function* () {
    this.body = --server_count;
  }))
;

export default function () {
  return compose(app.middleware);
}

