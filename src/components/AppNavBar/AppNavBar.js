import React from 'react'
import { Link } from 'react-router'

import { Msg } from './messages'
import styles from './styles.css'

export default class AppNavBar extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  render () {
    // this.props.routerProps
    // this.context.router.push({ pathname: '/about', query: {}, state: null })
    return (
      <nav className={styles.nav}>
        <Link to="/home" activeClassName={styles.navActive}><Msg s="navHome"/></Link>
        <Link to="/about" activeClassName={styles.navActive}><Msg s="navAbout"/></Link>
      </nav>
    )
  }
}
