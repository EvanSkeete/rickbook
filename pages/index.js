import React from 'react'
import Router from 'next/router'

import { post } from 'api-utils.js'
import {
  FormInput,
  LoginForm,
  LoginPageContainer,
  PageContainer,
  SubmitButton
} from 'base-components.js'

const login = async (email, password) => {
  const res = await post('/login', { email, password })

  if (res.ok) {
    Router.push({
      pathname: '/feed'
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
    return <LoginForm className='login-form' onSubmit={async (e) => {
      e.preventDefault()
      console.log(this.email, this.password)
      login(this.email.value, this.password.value)
    }}>

      <FormInput
        name='email'
        type='text'
        innerRef={(elem) => { this.email = elem }}
      />

      <FormInput
        name='password'
        type='password'
        innerRef={(elem) => { this.password = elem }} />

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
