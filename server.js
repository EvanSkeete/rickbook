const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const DATA = require('./server/data.js')
const USERS = DATA.USERS
const POSTS = DATA.POSTS

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json())
  server.use(express.static('static'))

  server.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password
    const user = USERS[email]
    return (user && user.password === password) ? res.sendStatus(200) : res.sendStatus(401)
  })

  server.post('/posts', (req, res) => {
    const from = req.body.from
    const to = req.body.to
    const content = req.body.content

    POSTS.unshift({
      to: to || null,
      from: from || null,
      content: content || null
    })
    return res.sendStatus(200)
  })

  server.get('/posts', (req, res) => {
    const user = req.query.user
    return res.send(POSTS.filter((post) => user ? (post.to === user || post.to === null) : post))
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
