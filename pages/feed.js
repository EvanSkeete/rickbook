import PropTypes from 'prop-types'
import React from 'react'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux'

import { get, post } from 'api-utils.js'
import {
  ContentContainer,
  FormTextArea,
  Header,
  HeaderImage,
  NewPostForm,
  PageContainer,
  PostContentContainer,
  PostListItem,
  PostListItemHeader,
  PostListItemImage,
  PostListItemImagePlaceholder,
  PostsList,
  SubmitButton
} from 'base-components.js'
import { initStore } from 'store.js'

const Posts = connect(
  (state) => ({
    posts: state.posts,
    users: state.users
  })
)(({ posts, users }) => (
  <PostsList>{posts.map((post, index) => {
    // Get the user data for the from and to users
    const from = users[post.from]
    const to = users[post.to]

    // Get some data to display
    const img = from && from.img
    const fromName = from ? from.name : post.from
    const toName = to ? to.name : post.to

    return <PostListItem key={index} isPrivate={!!post.to}>
      { img ? <PostListItemImage src={`/static/${img}`} width='100px' height='100px' /> : <PostListItemImagePlaceholder />}
      <PostContentContainer>
        <PostListItemHeader>{fromName} {toName && <span>> {toName}</span>}</PostListItemHeader>
        <p>{post.content}</p>
      </PostContentContainer>
    </PostListItem>
  })}</PostsList>
))

Posts.propTypes = {
  posts: PropTypes.array
}

class NewPostFormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.newPostTextArea = null
  }

  render () {
    return <NewPostForm onSubmit={async (e) => {
      e.preventDefault()

      const { user, addPost } = this.props
      const content = this.newPostTextArea.value
      if (!content) return
      await post('/posts', { from: user, content })
      addPost({ from: user, to: null, content })
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
  user: PropTypes.string,
  addPost: PropTypes.func
}

const ConnectedNewPostFormContainer = connect(
  // connnect state
  (state) => ({
    user: state.currentLoggedInUser
  }),
  // connect dispatch
  (dispatch) => ({
    addPost: (post) => {
      dispatch({ type: 'ADD_POST', payload: post })
    }
  })
)(NewPostFormContainer)

class FeedPage extends React.Component {
  static async getInitialProps ({ store, isServer, query }) {
    const { getState, dispatch } = store
    const { posts, currentLoggedInUser } = getState()
    let res

    if (!currentLoggedInUser) {
      res = await get(`http://localhost:3000/login`)
      res.ok && dispatch({ type: 'LOGIN', payload: (await res.json()).user })
    }

    if (!posts.length) {
      res = await get(`http://localhost:3000/posts`)
      res.ok && dispatch({ type: 'SET_POSTS', payload: await res.json() })
    }
  }

  componentWillMount () {
    this.componentWillReceiveProps(this.props)
  }

  async componentWillReceiveProps (props) {
    const { users, setUsers } = props
    if (!Object.keys(users).length) {
      const res = await get(`http://localhost:3000/users`)
      res.ok && setUsers(await res.json())
    }
  }

  render () {
    const { currentLoggedInUser, users } = this.props
    const currentUser = currentLoggedInUser && users[currentLoggedInUser]
    const img = currentUser ? currentUser.img : 'rick.png'
    const name = currentUser ? currentUser.name : 'Rick'

    return <PageContainer>
      <Header>
        <HeaderImage src={`/static/${img}`} width='150px' height='150px' />
        <h1>{name}book</h1>
      </Header>
      <ContentContainer>
        <ConnectedNewPostFormContainer />
        <Posts />
      </ContentContainer>
    </PageContainer>
  }
}

FeedPage.propTypes = {
  currentLoggedInUser: PropTypes.string,
  users: PropTypes.object
}

const ConnectedFeedPage = connect(
  // connect state
  (state) => ({
    currentLoggedInUser: state.currentLoggedInUser,
    users: state.users
  }),
  // connect dispatch
  (dispatch) => ({
    setUsers: (users) => {
      dispatch({ type: 'SET_USERS', payload: users })
    }
  })
)(FeedPage)

export default withRedux(initStore)(ConnectedFeedPage)
