import React from 'react'
import Router from 'next/router'

import { post } from 'api-utils.js'
import {
  FormInput,
  LoginForm,
  LoginImage,
  LoginPageContainer,
  PageContainer,
  SubmitButton
} from 'base-components.js'

const login = async (email, password) => {
  const res = await post('/login', { email, password })

  if (res.ok) {
    Router.push({
      pathname: '/feed',
      query: { user: email }
    })
  }
}

class LoginFormContainer extends React.Component {
  constructor (props) {
    super(props)
    this.email = null
    this.password = null
  }

  render () {
    return <LoginForm onSubmit={async (e) => {
      e.preventDefault()
      login(this.email.value, this.password.value)
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

const LoginPage = () => (
  <PageContainer>
    <LoginPageContainer>
      <LoginFormContainer />
    </LoginPageContainer>
  </PageContainer>
)

export default LoginPage
