global.__CLIENT__ = false;
global.__SERVER__ = true;

import 'babel/polyfill';
import koa from 'koa';

const isDev = (process.env.NODE_ENV === 'development' ? true : false);
const config = require('../../webpack.config' + (isDev ? '.dev.js' : '.js'));

const app = koa();
export default app;

import serve from 'koa-static';
app.use(serve('public'));

import api from './api';
app.use(api());

import counter from './counter';
app.use(counter());

app.listen(config._port);
console.log(`Launched at http://localhost:${config._port}`);
