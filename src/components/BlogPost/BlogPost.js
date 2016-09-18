import React from 'react'
import InlineCss from 'react-inline-css'

class BlogPost extends React.Component {
  static propTypes = {
    post: React.PropTypes.object.isRequired,
    comments: React.PropTypes.array.isRequired
  }

  componentWillMount () {
    // run on Server & Client.
  }
  componentDidUpdate (prevProps, prevState) {
    // run on Client only.
  }

  render () {
    // run on Server & Client.
    const { post, comments } = this.props

    return (
      <InlineCss stylesheet={BlogPost.css()} namespace="BlogPost">
        <p>
          Blog Post - Post {post.id}: {post.title}
        </p>
        <p>
          Total Comments: {comments.length}
        </p>
      </InlineCss>
    )
  }

  /**
   * This component <InlineCss> allows you to write a CSS stylesheet for your component. Target
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

export default BlogPost
