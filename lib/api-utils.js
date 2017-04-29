import setupFetch from 'fetch-ponyfill'

const { fetch } = setupFetch()

export const get = (url) => fetch(url)

export const post = (url, body) => fetch(url, {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(body)
})
