import fs from 'fs'
import mustache from 'mustache'

const INDEX_TEMPLATE_FILE = 'dist/views/index.tpl.html'
const TRACKING_CODE_FILE = 'dist/views/tracking-code.tpl.html'

const indexFileContent = fs.readFileSync(INDEX_TEMPLATE_FILE).toString()
const trackingCodeFileContent = fs.readFileSync(TRACKING_CODE_FILE).toString()

export function renderIndexPage (data) {
  return mustache.render(indexFileContent, data)
}

export function getTrackingHtml () {
  return trackingCodeFileContent
}
