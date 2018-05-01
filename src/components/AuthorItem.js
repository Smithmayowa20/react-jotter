import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AuthorInput from './AuthorInput'
import { Button } from 'reactstrap';

export default class TodoItem extends Component {
	constructor(props) {
        super(props);
		
  this.state = {
	editing_author: false
	}
 }
  
  static propTypes = {
    author: PropTypes.object.isRequired,
    editAuthor: PropTypes.func.isRequired,
    deleteAuthor: PropTypes.func.isRequired,
  }



  handlePostDoubleClick() {
    this.setState({ editing_author: true })
  }
  
  handleSave = (id, name, age) => {
    if (name.length === 0) {
      this.props.deleteAuthor(id)
    } else {
      this.props.editAuthor(id, name, age)
    }
    this.setState({ editing_author: false })
  }

  render() {
    const { author, deleteAuthor } = this.props
	
	const author_element = () => {
    if (this.state.editing_author) {
		return(
        <AuthorInput author_id={author.id} name={author.name} age={author.age} 
                       editing={this.state.editing_author} 
                       edit={this.handleSave} />
      )
    } else {
	  return(
		<div className="view">
          <label onDoubleClick={this.handlePostDoubleClick.bind(this)}>
			<h3> {author.name} </h3>
			<h4>{author.age}</h4>
			<h6>Author_id : {author.id}</h6>
          </label>
		  <br/>
          <Button color="danger" className="destroy" onClick={() => deleteAuthor(author.id)} > Delete </Button>
        </div>
		)
	  }
    } 

    return (
	<div>
	  <li className={classnames({
        editing: this.state.editing_author
      })}>
	  {author_element()}
      </li>
	  </div>
    )
  }
}
