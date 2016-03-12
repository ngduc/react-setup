// locales for Node
// http://formatjs.io/guides/runtime-environments/#polyfill-node
/* eslint-disable global-require */

const localesMyAppSupports = ['en', 'ja']

const areIntlLocalesSupported = require('intl-locales-supported')
if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported(localesMyAppSupports)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and replace the constructors with need with the polyfill's.
    require('intl')
    Intl.NumberFormat = IntlPolyfill.NumberFormat
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = require('intl')
}
