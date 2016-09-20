import React from 'react'
import { FormattedDate } from 'react-intl'

import { ButtonGroup, Button } from 'react-bootstrap'
import { BlogPost, Utils } from 'components'
import API from 'api'

import { Msg } from './messages'
import styles from './styles.css'

const fragmentObj = {
  post: [API.getPost, 1],
  comments: [API.listComments, 1]
}

class Home extends React.Component {
  state = {
    post: {},
    comments: []
  }

  componentWillMount () {
    Utils.fetchFragmentsToState(fragmentObj, this)
  }

  render () {
    return (
      <section className={styles.home}>
        <h3><Msg s="title"/></h3>
        <p><Msg s="welcome" values={{ page: 'Home Page' }}/></p>
        <p><Msg s="today"/> <FormattedDate value={ new Date() } day="numeric" month="numeric" year="numeric" /></p>
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
        <div>Recent Blog - Title: {this.state.post.title}</div>

        <BlogPost post={this.state.post} comments={this.state.comments}/>
      </section>
    )
  }
}

export default Utils.createTransmitContainer(Home, fragmentObj)
