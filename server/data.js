const USERS = {
  'rick@rick.com': {
    email: 'rick@rick.com',
    name: 'Rick Sanchez',
    password: 'asdf'
  },
  'morty@morty.com': {
    email: 'morty@morty.com',
    name: 'Morty Sanchez',
    password: 'asdf'
  }
}

const POSTS = [{
  from: 'rick@rick.com',
  to: null,
  content: 'You know what a vole is, Morty? You know what a vole is? Oh I say good sir, oh harumph, ohh a bope-a-dope-o-bobo. Oh, I\'m sorry Morty, are you the scientist or are you the kid who wanted to get laid? Lookin\' good!'
}, {
  from: 'rick@rick.com',
  to: null,
  content: 'Yea and I made the stars that became the carbon in your mothers ovaries! It\'s a dream, Morty! We\'re in your dog\'s dream.'
}, {
  from: 'rick@rick.com',
  to: 'morty@morty.com',
  content: 'Blah blah blah'
}]

module.exports = {
  USERS,
  POSTS
}
