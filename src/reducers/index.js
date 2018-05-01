import { combineReducers } from 'redux'
import posts from './post'
import authors from './author'

const rootReducer = combineReducers({
  posts,
  authors
})

export default rootReducer