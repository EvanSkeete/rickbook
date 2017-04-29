const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const { USERS, POSTS } = require('./server/data.js')

app.prepare()
.then(() => {
  const server = express()
  server.use(bodyParser.json())

  server.post('/login', (req, res) => {
    const { email, password } = req.body
    const user = USERS[email]
    return (user && user.password === password) ? res.sendStatus(200) : res.sendStatus(401)
  })

  server.post('/posts', (req, res) => {
    POSTS.push(req.body)
    return res.sendStatus(200)
  })

  server.get('/posts', (req, res) => {
    return res.send(POSTS)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
