import PropTypes from 'prop-types'
import React from 'react'
import Router from 'next/router'

import { get, post } from 'api-utils.js'
import {
  ContentContainer,
  FormTextArea,
  Header,
  HeaderImage,
  NewPostForm,
  PageContainer,
  PostListItem,
  PostListItemHeader,
  PostsList,
  SubmitButton
} from 'base-components.js'

const sendPost = async (from, content) => {
  const res = await post('/posts', { from, content })

  // We're gonna get rid of this hack soon enough
  if (res.ok) {
    Router.push({
      pathname: '/feed',
      query: { user: from }
    })
  }
}

const Posts = ({ posts }) => (
  <PostsList>{posts.map((post, index) => (
    <PostListItem key={index} isPrivate={!!post.to}>
      <PostListItemHeader>{post.from} {post.to && <span>> {post.to}</span>}</PostListItemHeader>
      <p>{post.content}</p>
    </PostListItem>
  ))}</PostsList>
)

Posts.propTypes = {
  posts: PropTypes.array
}

class NewPostFormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.newPostTextArea = null
  }

  render () {
    return <NewPostForm onSubmit={(e) => {
      e.preventDefault()
      sendPost(this.props.user, this.newPostTextArea.value)
      this.newPostTextArea.value = ''
    }}>

      <FormTextArea
        name='newPostTextArea'
        type='text'
        innerRef={(elem) => { this.newPostTextArea = elem }}
        placeholder={'What\'s on your mind?'}
      />

      <SubmitButton type='submit'>Post</SubmitButton>

    </NewPostForm>
  }
}

NewPostFormContainer.propTypes = {
  user: PropTypes.string
}

class FeedPage extends React.Component {
  static async getInitialProps ({ query }) {
    const user = query.user
    const posts = await get(`http://localhost:3000/posts?user=${user}`)
    return { posts: await posts.json(), user }
  }

  render () {
    const { posts, user } = this.props

    return <PageContainer>
      <Header>
        <h1>Rickbook</h1>
        <HeaderImage src='/static/rick.png' width='150px' height='150px' />
      </Header>
      <ContentContainer>
        <NewPostFormContainer user={user} />
        <Posts posts={posts} />
      </ContentContainer>
    </PageContainer>
  }
}

FeedPage.propTypes = {
  posts: PropTypes.array,
  user: PropTypes.string
}

export default FeedPage
