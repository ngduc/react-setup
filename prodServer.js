/* eslint-disable no-var */
require('babel-core/register'); // so we can use babel for other files except this file.

const path = require('path');
const express = require('express');
const app = express();
const fs = require('fs');

//import { getLocaleMessages } from './tools/i18n';
const i18n = require('./tools/i18n');

// don't use default index.html to avoid conflict with app.get '*' function.
app.use(express.static(__dirname + '/dist', { index: 'index.dummy' }));

app.get('*', (req, res) => {
  const locale = req.query.loc || 'en-US';
  const messagesJsonString = i18n.getLocaleMessages(locale);

  var data = fs.readFileSync(path.join(__dirname, 'dist/index.html'), 'utf8').toString();
  data = data.replace(/__i18nMessages__/g, messagesJsonString);

  res.send(data);
});

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', 8000, 8000);
});
