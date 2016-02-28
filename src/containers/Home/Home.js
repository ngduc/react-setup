import React from 'react'
import Transmit from 'react-transmit'
import { Link } from 'react-router'
import { injectIntl, FormattedDate } from 'react-intl'

import { ButtonGroup, Button } from 'react-bootstrap'
import { CommentBox, NavBar, Utils } from 'components'
import dataService from 'apis/dataService'

import { Msg } from './messages'
import styles from './styles.css'

const _fetchInitialData = (id) => {
  return dataService.read(['posts', id], {})
    .catch(error => {
      throw error
    })
}
const fragmentArr = [
  { data: [_fetchInitialData, 3] },
  { commentBoxData: [CommentBox.fetchInitialData, 3] }
]
// -------------------------------------------------------------------------------- //

class Home extends React.Component {
  state = { data: {}, commentBoxData: {} }

  componentWillMount () {
    // after routing back to this component, manually fetch data:
    if (__CLIENT__ && !this.props.data) {
      Utils.fetchFragmentsToState(fragmentArr, this)
    } else {
      this.setState(this.props)
    }
  }

  render () {
    return (
        <div className={styles.home}>
          <NavBar />

          <h3>Home</h3>
          <p><Msg s="welcome" values={{ page: 'Home Page' }}/></p>
          <p><Msg s="today"/> <FormattedDate value={ new Date() } day="numeric" month="long" year="numeric" /></p>
          <ul>
            <li><a href="/?locale=en-US">English en-US</a></li>
            <li><a href="/?locale=ja-JP">Japanese ja-JP</a></li>
          </ul>
          <ButtonGroup>
            <Button><Msg s="rateMeh" /></Button>
            <Button><Msg s="rateOk" /></Button>
            <Button><Msg s="rateGreat" /></Button>
          </ButtonGroup>
          <hr />

          <div>Post 1 - Title: "{this.state.data.title}"</div>

          <CommentBox data={this.state.commentBoxData}/>
        </div>
    )
  }

  static css () {
    return (`
			& {
				font-family: sans-serif;
				padding: 5px;
				margin: 5px auto;
				background: #eee;
			}
		`)
  }
}

const fragments = Utils.getTransmitFragments(fragmentArr)
export default Transmit.createContainer(Home, { initialVariables: {}, fragments })
