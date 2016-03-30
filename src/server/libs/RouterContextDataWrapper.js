/* eslint-disable func-names */
// TODO: fix this: using "function" will mess up webpack-dev-server - https://github.com/ngduc/react-setup/issues/14

import React from 'react'
import { RouterContext } from 'react-router'

/**
 * Wrap RouterContext component with context data.
 * @param {Object} dataObj - Data object.
 * @returns {Class} - Wrapped RouterContext.
 */
export function createRouterContextDataWrapper (dataObj) {
  return React.createClass({
    childContextTypes: {
      data: React.PropTypes.object.isRequired
    },
    getChildContext: function () {
      return {
        data: dataObj
      }
    },
    render: function () {
      return <RouterContext { ...this.props } />
    }
  })
}
