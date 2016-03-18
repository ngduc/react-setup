import React from 'react'
import { Link } from 'react-router'

import { Msg } from './messages'

export default class About extends React.Component {
  render () {
    return (
      <section>
        <h3><Msg s="title"/></h3>

        <p><Msg s="intro"/></p>
      </section>
    )
  }
}
