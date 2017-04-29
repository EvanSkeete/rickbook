const USERS = {
  'rick@rick.com': {
    email: 'rick@rick.com',
    name: 'Rick Sanchez',
    password: '123Password'
  },
  'morty@morty.com': {
    email: 'morty@morty.com',
    name: 'Morty Sanchez',
    password: '123Password'
  }
}

const POSTS = [{
  from: 'rick@rick.com',
  to: null,
  content: 'wassup'
}]

module.exports = {
  USERS,
  POSTS
}
