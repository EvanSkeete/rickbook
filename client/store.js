import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  currentLoggedInUser: null,
  posts: [],
  users: {}
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN': return { ...state, currentLoggedInUser: action.payload, posts: [] }
    case 'SET_POSTS': return { ...state, posts: action.payload }
    case 'SET_USERS': return { ...state, users: action.payload }
    case 'ADD_POST': return { ...state, posts: [action.payload, ...state.posts] }
    default: return state
  }
}

export const initStore = (initialState) => {
  const composeEnhancers = composeWithDevTools({})
  return createStore(reducer, initialState, (typeof window === 'undefined') ? applyMiddleware(thunkMiddleware) : composeEnhancers(applyMiddleware(thunkMiddleware)))
}
