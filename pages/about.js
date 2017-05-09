import React from 'react'
import PropTypes from 'prop-types'

export default class extends React.Component {
  static async getInitialProps ({ req }) {
    const content = req ? 'server rendered' : 'client rendered'
    return { content }
  }

  static propTypes = {
    content: PropTypes.string
  }

  render () {
    return <div>
      {this.props.content}
    </div>
  }
}
