import * as types from '../actiontypes/post'
import * as types_2 from '../actiontypes/author'

export const addPost = (title,text,author_id) => ({ type: types.ADD_POST, title, text, author_id })
export const deletePost = id => ({ type: types.DELETE_POST, id })
export const editPost = (id, title, text) => ({ type: types.EDIT_POST, id, title, text })

export const addAuthor = (name,age) => ({ type: types_2.ADD_AUTHOR, name, age })
export const deleteAuthor = id => ({ type: types_2.DELETE_AUTHOR, id })
export const editAuthor = (id, name, age ) => ({ type: types_2.EDIT_AUTHOR, id, name, age })