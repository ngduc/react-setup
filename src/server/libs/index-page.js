import fs from 'fs'
import mustache from 'mustache'

import { getLocaleMessages } from './i18n'

const INDEX_TEMPLATE_FILE = 'dist/views/index.tpl.html'
const TRACKING_CODE_FILE = 'dist/views/tracking-code.tpl.html'

const indexFileContent = fs.readFileSync(INDEX_TEMPLATE_FILE).toString()
const trackingCodeFileContent = fs.readFileSync(TRACKING_CODE_FILE).toString()

/**
 * Render index page content with locale and reactString.
 * @param {string} locale - Locale.
 * @param {string} reactString - Output from server rendering.
 * @returns {string} - Index page content.
 */
function renderIndexPage (locale, reactString) {
  const i18nData = getLocaleMessages(locale)
  const i18nDataString = JSON.stringify(i18nData)

  const data = {
    ver: '' + __webpack_hash__, // eslint-disable-line camelcase
    i18nDataString,
    reactString,
    trackingCode: trackingCodeFileContent
  }
  return mustache.render(indexFileContent, data)
}

export { renderIndexPage }
