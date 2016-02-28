import React from 'react'
import InlineCss from 'react-inline-css'
import Transmit from 'react-transmit'

import dataService from 'apis/dataService'

const _fetchInitialData = (id) => {
  return dataService.browse(['posts', id, 'comments'], {})
    .catch(error => {
      throw error
    })
}
// -------------------------------------------------------------------------------- //

/**
 * Main React application entry-point for both the server and client.
 */
class CommentBox extends React.Component {
  // run on Server & Client.
  componentWillMount () {
  }

  // run on Client only.
  componentDidUpdate (prevProps, prevState) {
  }

  // run on Server & Client.
  render () {
    const { data } = this.props

    return (
      <InlineCss stylesheet={CommentBox.css()} namespace='CommentBox'>
        <p>
          Comment Box - Post 1:
        </p>
        <p>
          Total Comments: {data.length}
        </p>
      </InlineCss>
    )
  }

  /**
   * <InlineCss> component allows you to write a CSS stylesheet for your component. Target
   * your component with `&` and its children with `& selectors`. Be specific.
   */
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

CommentBox.fetchInitialData = _fetchInitialData

export default CommentBox
