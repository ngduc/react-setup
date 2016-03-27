import fs from 'fs'
import mustache from 'mustache'

import { getLocaleMessages } from './i18n'

const INDEX_TEMPLATE_FILE = 'dist/views/index.tpl.html'
const TRACKING_CODE_FILE = 'dist/views/tracking-code.tpl.html'

const indexFileContent = fs.readFileSync(INDEX_TEMPLATE_FILE).toString()
const trackingCodeFileContent = fs.readFileSync(TRACKING_CODE_FILE).toString()


export function renderIndexPage (locale, reactString) {
  const i18nData = getLocaleMessages(locale)
  const i18nDataString = JSON.stringify(i18nData)

  const data = {
    i18nDataString,
    reactString,
    trackingCode: trackingCodeFileContent
  }
  return mustache.render(indexFileContent, data)
}
