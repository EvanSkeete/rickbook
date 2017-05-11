/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        next.js
*
*        Framework for server-rendered React apps
*
*        http://slides.com/evanskeete-1/next-js
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        SETUP
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// install some packages
`npm install next react react-dom --save`

// add some scripts to package.json
module.exports = {
  "scripts": {
    "dev": "next",
    "build": "next build",
    "start": "next start"
  }
}

// pages/index.js
export default () => (
  <div>Welcome to next.js!</div>
)

// start the server
`npm run dev`

// automatic code splitting
// server side rendering
// hot reloading


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        styled-jsx
*
*        scoped css, similar to web components
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

export default () => (
  <div>
    Hello world
    <p>scoped!</p>
    <style jsx>{`
      p {
        color: blue;
      }
      div {
        background: red;
      }
      @media (max-width: 600px) {
        div {
          background: blue;
        }
      }
    `}</style>
  </div>
)


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        styled-components
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

`npm install --save styled-components`

// _document.js
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>My page</title>
          {styleTags}
        </Head>
        <body>
          <div className='root'>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}

// index.js
import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => <Title>My page</Title>


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        Populating <head>
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <p>Hello world!</p>
  </div>
)


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        Fetching data and component lifecycle
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

import React from 'react'
export default class extends React.Component {
  static async getInitialProps ({ req }) {
    return req
      ? { content: 'server rendered' }
      : { content: 'client rendered' }
  }
  render () {
    return <div>
      {this.props.content}
    </div>
  }
}

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        Routing
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

// pages/index.js
import Link from 'next/link'
export default () => (
  <div>Click <Link href="/about"><a>here</a></Link> to read more</div>
)

// prefetch the linked page
<Link prefetch />

/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        Custom server and routing (node / express integration)
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
  const server = express()

  server.get('/a', (req, res) => {
    return app.render(req, res, '/b', req.query)
  })

  server.get('/b', (req, res) => {
    return app.render(req, res, '/a', req.query)
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        Custom webpack config
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to config

    // Important: return the modified config
    return config
  }
}


/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*
*        Customizing babel config
*
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

{
  "presets": [
    "next/babel",
    "stage-0"
  ],
}
