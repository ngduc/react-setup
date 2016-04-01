// source: https://github.com/yahoo/react-intl/blob/master/examples/translations/src/server/index.js
import path from 'path'
import { sync as globSync } from 'glob'
import { readFileSync } from 'fs'

const translations = globSync('static/translations/*.json')
  .map((filename) => [
    path.basename(filename, '.json'),
    readFileSync(filename, 'utf8')
  ])
  .map(([locale, file]) => [locale, JSON.parse(file)])
  .reduce((collection, [locale, messages]) => {
    collection[locale] = messages
    return collection
  }, {})

/**
 * Get all translated messages of a locale.
 * @param {string} locale - Locale.
 * @returns {{ locale: string, messages: Object }} - Object of locale and messages.
 */
function getLocaleMessages (locale) {
  const messages = translations[locale]
  return { locale, messages }
}

export { getLocaleMessages }
