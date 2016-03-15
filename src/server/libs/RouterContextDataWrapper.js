import React from 'react'
import { RouterContext } from 'react-router'


export function createRouterContextDataWrapper (dataObj) {
  return React.createClass({
    childContextTypes: {
      data: React.PropTypes.object.isRequired
    },
    getChildContext: () => {
      return {
        data: dataObj
      }
    },
    render: () => {
      return <RouterContext { ...this.props } />
    }
  })
}
