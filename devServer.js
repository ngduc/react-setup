const koa = require('koa');
const webpackDevServer = require('koa-webpack-dev');
const configFilePath = './webpack.config.dev';
const config = require(configFilePath);

const app = koa();

app.use(webpackDevServer({
    config: configFilePath
}));

console.info(`🌎  Listening on port ${config._hotPort}. Open up http://localhost:${config._hotPort}/ in your browser.`);

app.listen(8000);
