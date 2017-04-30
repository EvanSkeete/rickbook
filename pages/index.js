import React from 'react'
import Router from 'next/router'
import withRedux from 'next-redux-wrapper'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { post } from 'api-utils.js'
import {
  FormInput,
  LoginForm,
  LoginImage,
  LoginPageContainer,
  PageContainer,
  SubmitButton
} from 'base-components.js'
import { initStore } from 'store.js'

class LoginFormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.email = null
    this.password = null
  }

  render () {
    const { login } = this.props

    return <LoginForm onSubmit={async (e) => {
      e.preventDefault()

      const email = this.email.value
      const password = this.password.value
      const success = await login(email, password)

      if (success) { Router.push({ pathname: '/feed' }) }
    }}>

      <LoginImage src='/static/rick.png' width='200px' height='200px' />

      <FormInput
        name='email'
        type='text'
        innerRef={(elem) => { this.email = elem }}
        placeholder='email'
      />

      <FormInput
        name='password'
        type='password'
        innerRef={(elem) => { this.password = elem }}
        placeholder='password'
      />

      <SubmitButton type='submit'>login</SubmitButton>

    </LoginForm>
  }
}

LoginFormContainer.propTypes = {
  login: PropTypes.func.isRequired
}

const ConnectedLoginFormContainer = connect(null, (dispatch) => ({
  login: async (email, password) => {
    const res = await post('/login', { email, password })
    if (res.ok) { dispatch({ type: 'LOGIN', payload: email }) }
    return res.ok
  }
}))(LoginFormContainer)

const LoginPage = () => (
  <PageContainer>
    <LoginPageContainer>
      <ConnectedLoginFormContainer />
    </LoginPageContainer>
  </PageContainer>
)

export default withRedux(initStore)(LoginPage)
