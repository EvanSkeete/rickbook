import React from 'react'
import Router from 'next/router'

import { post } from 'api-utils.js'

const login = async (email, password) => {
  const res = await post('/login', { email, password })

  if (res.ok) {
    Router.push({
      pathname: '/feed'
    })
  }
}

class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.email = ''
    this.password = ''
  }

  render () {
    return <form onSubmit={async (e) => {
      e.preventDefault()
      login(this.email.value, this.password.value)
    }}>
      <input name='email' type='text' ref={(elem) => { this.email = elem }} />
      <input name='password' type='password' ref={(elem) => { this.password = elem }} />
      <button type='submit'>Login</button>
    </form>
  }
}

export default LoginPage
