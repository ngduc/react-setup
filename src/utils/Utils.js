import Transmit from 'react-transmit'

export default class Utils {
  /**
   * Find a parent element by traversing up.
   * @param {Object} child - DOM element.
   * @param {string} selector - Selector to find parent. e.g. '#id123' or '.content' or 'div'.
   * @returns {Object} - Return parent dom element (return itself if it satisfies the selector).
   */
  static findParentByChild (child, selector) {
    let el = child
    const isClassName = (selector[0] === '.' ? true : false)
    const isId = (selector[0] === '#' ? true : false)
    if (isId || isClassName) {
      selector = selector.slice(1)
    }
    while (el) {
      const classes = el.getAttribute('class')
      if ((isId && el.getAttribute('id') === selector) ||
        (isClassName && classes && classes.split(' ').indexOf(selector) >= 0) ||
        (el.tagName === selector.toUpperCase())) {
        break
      }
      el = el.parentElement
    }
    return el
  }

  /**
   * Toggle element by setting display style to 'block' or 'none'.
   * @example - toggle({ overlayEl: el, show: false }).
   * @param {Object} param - Object parameter { name: domEl, show: boolean }.
   */
  static toggle (param) {
    const el = param[ Object.keys(param)[0] ] // first param object.
    el.style.display = (param.show ? 'block' : 'none')
  }

  /**
   * Helper function to get Transmit Fragments object from the array of fragments.
   * @param {Object} fragmentObj - Object of fragments which declares functions to fetch data.
   * @returns {Object} - Transmit's fragment object.
   */
  static getTransmitFragments (fragmentObj) {
    const fragments = {}
    for (const key in fragmentObj) {
      const fn = fragmentObj[ key ][ 0 ]
      const fnParams = fragmentObj[ key ].slice(1)
      fragments[ key ] = () => ( __CLIENT__ ? Promise.resolve() : fn.apply(this, fnParams) )
    }
    return fragments
  }

  /**
   * Client-side helper to invoke functions in 'fragmentArr' to fetch data to the state.
   * @param {Object} fragmentObj - Object of fragments which declares functions to fetch data.
   * @param {Object} ctx - Context (e.g. this).
   * @param {callbackFn} [callbackFn] - Callback function to handle each fragment.
   *   @callback callbackFn
   *   @param {string} callbackFn.key - Fragment key.
   *   @param {Object} callbackFn.data - Fragment data.
   *   @param {allDoneFn} [allDoneFn] - Callback function when all requests completed.
   */
  static fetchFragmentsToState (fragmentObj, ctx, callbackFn, allDoneFn) {
    let counter = 0
    const allData = {}
    const keys = fragmentObj ? Object.keys(fragmentObj) : []

    if (__CLIENT__ && keys.length > 0 && !ctx.props[ keys[0] ]) {
      // if client-side & data was not injected in props by server-rendering (Transmit) => fetch data
      for (const key in fragmentObj) {
        const fn = fragmentObj[ key ][ 0 ]
        const fnParams = fragmentObj[ key ].slice(1)
        fn( fnParams ).then(data => {
          const state = {}
          state[ key ] = data
          allData[ key ] = data
          ctx.setState(state)
          if (callbackFn) {
            callbackFn(key, data) // invoke the callback function when each request is done.
          }
          counter++
          if (counter === keys.length) {
            if (allDoneFn) {
              allDoneFn(allData)
            }
          }
        })
      }
    } else {
      ctx.setState(ctx.props)
    }
  }

  /**
   * Helper function to wrap Component with Transmit Container to fetch fragments for server rendering.
   * @param {Class} Component - Component to wrap.
   * @param {Array} fragmentObj - Object of fragments which declare functions to fetch data.
   * @returns {Object} - Transmit Container.
   */
  static createTransmitContainer (Component, fragmentObj) {
    const fragments = this.getTransmitFragments(fragmentObj)
    return Transmit.createContainer(Component, { initialVariables: {}, fragments })
  }
}
