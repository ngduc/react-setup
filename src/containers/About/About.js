import React from 'react'
import { Link } from 'react-router'
import { NavBar } from 'components'

import { Msg } from './messages'

export default class About extends React.Component {
  render() {
    return (
      <div>
        <NavBar />

        <h3>About</h3>

        <p><Msg s="intro"/></p>
      </div>
    )
  }
}
