// TODO: require('babel-core/register');

const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

import { getLocaleMessages } from './tools/i18n';
const messagesJsonString = getLocaleMessages('ja-JP');

// don't use default index.html to avoid conflict with app.get '*' function.
app.use(express.static(__dirname + '/dist', { index: 'index.dummy' }));

app.get('*', (req, res) => {
  // TODO: get locale from params & return the appropriate messagesJsonString; cache data?
  let data = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf8').toString();
  data = data.replace(/__i18nMessages__/g, messagesJsonString);

  res.send(data);
});

app.listen(8000, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', 8000, 8000);
});
