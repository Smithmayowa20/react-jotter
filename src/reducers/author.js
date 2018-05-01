import { ADD_AUTHOR, DELETE_AUTHOR, EDIT_AUTHOR} from '../actiontypes/author'
import {authorlist} from '../InitialState/authorlist'

export default function authors(state = authorlist, action) {
  switch (action.type) {
    case ADD_AUTHOR:
      return [
        ...state,
        {
          id: state.reduce((maxId, author) => Math.max(author.id, maxId), -1) + 1,
          name: action.name,
		  joined: new Date(),
          age: action.age
        }
      ]

    case DELETE_AUTHOR:
      return state.filter(author =>
        author.id !== action.id
      )

    case EDIT_AUTHOR:
      return state.map(author =>
        author.id === action.id ?
          { ...author, name: action.name, age:action.age } :
          author
      )
	  
    default:
      return state
  }
}
