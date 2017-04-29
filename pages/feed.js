import Link from 'next/link'
import PropTypes from 'prop-types'
import React from 'react'

import { get } from 'api-utils.js'

const Posts = ({ posts }) => (
  <ol>
    {posts.map((post, index) => <li key={index}>{post.content}</li>)}
  </ol>
)

Posts.propTypes = {
  posts: PropTypes.array
}

class FeedPage extends React.Component {
  static async getInitialProps ({ req }) {
    const posts = await get('http://localhost:3000/posts')
    return { posts: await posts.json() }
  }

  render () {
    const { posts } = this.props

    return <div>
      <Posts posts={posts} />
      <Link href='/profile'><a>profile</a></Link>
    </div>
  }
}

FeedPage.propTypes = {
  posts: PropTypes.array
}

export default FeedPage
