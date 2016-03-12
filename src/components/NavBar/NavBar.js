import React from 'react'
import { Link } from 'react-router'

import { Msg } from './messages'
import styles from './styles.css'

export default class NavBar extends React.Component {
  render () {
    return (
      <nav className={styles.nav}>
        <Link to="/home" activeClassName={styles.navActive}><Msg s="navHome"/></Link>
        <Link to="/about" activeClassName={styles.navActive}><Msg s="navAbout"/></Link>
      </nav>
    )
  }
}
