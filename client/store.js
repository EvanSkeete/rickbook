import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  loggedInAs: null,
  posts: [],
  users: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': return { ...state, loggedInAs: action.payload, posts: [] }
    case 'SET_POSTS': return { ...state, posts: action.payload }
    case 'SET_USERS': return { ...state, users: action.payload }
    case 'ADD_POST': return { ...state, posts: [action.payload, ...state.posts] }
    default: return state
  }
}

export const initStore = (initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}
