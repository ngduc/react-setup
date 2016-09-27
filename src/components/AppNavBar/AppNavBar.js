import React from 'react'
import { Link } from 'react-router'

import { Msg } from './messages'
import css from './AppNavBar.css'

export default class AppNavBar extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render () {
    // this.props.routerProps
    // this.context.router.push({ pathname: '/about', query: {}, state: null })
    return (
      <nav className={`globalNav ${css.nav}`}>
        <Link to="/home" activeClassName={css.navActive}><Msg s="navHome"/></Link>
        <Link to="/about" activeClassName={css.navActive}><Msg s="navAbout"/></Link>
      </nav>
    )
  }
}
