import { ADD_POST, DELETE_POST, EDIT_POST} from '../actiontypes/post'
import {initialpost} from '../InitialState/postinitialstate'

export default function posts(state = initialpost, action) {
  switch (action.type) {
    case ADD_POST:
      return [
        ...state,
        {
          id: state.reduce((maxId, post) => Math.max(post.id, maxId), -1) + 1,
		  title: action.title,
		  text: action.text,
          author_id: action.author_id
        }
      ]

    case DELETE_POST:
      return state.filter(post =>
        post.id !== action.id
      )

    case EDIT_POST:
      return state.map(post =>
        post.id === action.id ?
          { ...post, title:action.title, 
		  text: action.text, author_id: post.author_id} :
          post
      )
	  
    default:
      return state
  }
}
