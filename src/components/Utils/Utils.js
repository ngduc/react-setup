import Transmit from 'react-setup-transmit'

export default class Utils {
  /**
   * Find a parent element by traversing up.
   * @param {Object} child - DOM element.
   * @param {string} selector - Selector to find parent. e.g. '#id123' or '.content' or 'div'.
   * @returns {Object} - Return parent dom element.
   */
  static findParentByChild (child, selector) {
    let el = child
    const isClassName = (selector[0] === '.' ? true : false)
    const isId = (selector[0] === '#' ? true : false)
    if (isId || isClassName) {
      selector = selector.slice(1)
    }
    el = el.parentElement
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
   * Toggle element by setting display style to 'block' or 'none'
   * @example - toggle({ overlayEl: el, show: false })
   * @param {Object} param - Object parameter { name: domEl, show: boolean }
   */
  static toggle (param) {
    const el = param[ Object.keys(param)[0] ] // first param object.
    el.style.display = (param.show ? 'block' : 'none')
  }

  /**
   * Helper function to get Transmit Fragments object from the array of fragments.
   * @param {array} fragmentArr - Array of fragments which declare functions to fetch data.
   * @returns {object} - Transmit's fragment object.
   */
  static getTransmitFragments (fragmentArr) {
    return fragmentArr.reduce((res, item) => {
      const key = Object.keys(item)[0]
      const fragmentParams = item[key]
      res[key] = () => ( __CLIENT__ ? Promise.resolve() : fragmentParams[0].apply(this, fragmentParams.slice(1)) )
      return res
    }, {})
  }

  /**
   * Client-side helper to invoke functions in 'fragmentArr' to fetch data to the state.
   * @param {Array} fragmentArr - Array of fragments which declare functions to fetch data.
   * @param {Object} ctx - Context (e.g. this).
   * @param {callbackFn} [callbackFn] - Callback function to handle each fragment.
   *   @callback callbackFn
   *   @param {string} key - Fragment key.
   *   @param {Object} data - Fragment data.
   */
  static fetchFragmentsToState (fragmentArr, ctx, callbackFn) {
    fragmentArr.map(item => {
      const key = Object.keys(item)[0]
      const fragmentParams = item[ key ]
      const fn = fragmentParams[0]
      fn(fragmentParams.slice(1)).then(data => {
        const state = {}
        state[ key ] = data
        ctx.setState(state)
        if (callbackFn) {
          callbackFn(key, data)
        }
      })
    })
  }

  /**
   * Helper function to wrap Component with Transmit Container to fetch fragments for server rendering.
   * @param {Class} Component - Component to wrap.
   * @param {Array} fragmentArr - Array of fragments which declare functions to fetch data.
   * @returns {Object} - Transmit Container.
   */
  static createTransmitContainer (Component, fragmentArr) {
    const fragments = this.getTransmitFragments(fragmentArr)
    return Transmit.createContainer(Component, { initialVariables: {}, fragments })
  }
}
