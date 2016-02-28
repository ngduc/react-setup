import React from 'react'
import { Link } from 'react-router'
import styles from './styles.css'

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className={styles.nav}>
        <Link to="/home" activeClassName={styles.navActive}>Home</Link>
        <Link to="/about" activeClassName={styles.navActive}>About</Link>
      </nav>
    )
  }
}
