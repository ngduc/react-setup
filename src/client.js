import * as ReactRouter from 'react-router'
import Transmit from 'react-transmit'

import routesContainer from 'containers/routes'

/**
 * Fire-up React Router.
 */
const reactRoot = window.document.getElementById('react-root')

Transmit.render(ReactRouter.Router, { routes: routesContainer, history: ReactRouter.browserHistory }, reactRoot)

/**
 * Detect whether the server-side render has been discarded due to an invalid checksum.
 */
if (!__PRODUCTION__) {
  if (!reactRoot.firstChild || !reactRoot.firstChild.attributes ||
      !reactRoot.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.')
  }

  // Watch the extracted css file (main.css) - refer to: https://goo.gl/cgUEaB
  window.addEventListener('message', (e) => {
    if (e.data.search('webpackHotUpdate') === -1) {
      return
    }
    const mainCssFile = '/main.css'
    const links = document.getElementsByTagName('link')
    for (let i = 0; i < links.length; i++ ) {
      if (links[i].href.indexOf(mainCssFile) >= 0) {
        links[i].href = 'about:blank'
        links[i].href = mainCssFile
        console.log('Reloading ' + mainCssFile)
        break
      }
    }
  }, false)
}
