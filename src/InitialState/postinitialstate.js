import {authorlist} from './authorlist'

export const initialpost = [
  {
	title: 'Whats Up With Redux',
    text: `In Redux,
	all the application state is stored as a single object. It's a good idea to think of its shape before writing any code."
	What's the minimal representation of your apps state as an object?
    For our todo app, we want to store two different things:
    The currently selected visibility filter;
    The actual list of todos.
    You'll often find that you need to store some data,as well as some UI state, in the state tree. This is fine, but try to keep the data separate from the UI state.`,
    author_id: authorlist[0].id ,
    id: 0
  },
  {
	 title: 'Fuck Off',
	 text: `A rather long string of English text, an error message 
                actually that just keeps going and going -- an error 
                message to make the Energizer bunny blush (right through 
                those Schwarzenegger shades)! Where was I? Oh yes, 
                you've got an error and all the extraneous whitespace is 
                just gravy.  Have a nice day.`,
	author_id: authorlist[1].id ,
	 id:1
  },
]