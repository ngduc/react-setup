import React from 'react'
import { Link } from 'react-router'
import { AppNavBar } from 'components'

import { Msg } from './messages'

export default class About extends React.Component {
  render () {
    return (
      <div>
        <AppNavBar />

        <h3><Msg s="title"/></h3>

        <p><Msg s="intro"/></p>
      </div>
    )
  }
}
