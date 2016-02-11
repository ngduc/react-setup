global.__CLIENT__ = false;
global.__SERVER__ = true;

import 'babel/polyfill';
import Koa from 'koa';
import Router from 'koa-router';
import serveStatic from 'koa-serve-static';

import api from './api';
import counter from './counter';

const isDev = (process.env.NODE_ENV === 'development' ? true : false);
const config = require('../../webpack.config' + (isDev ? '.dev.js' : '.js'));

const app = new Koa();

app.use(api());

let router = new Router();
router.get('/', counter());
app.use(router.routes());

app.use(serveStatic('public', {}));  // TODO: exclude /api to avoid conflicts with /api/...

app.listen(config._port);
console.log(`🌎  Launched at http://localhost:${config._port}`);
