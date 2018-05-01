import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames' 
import { Button } from 'reactstrap';

export default class AuthorInput extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
		    editing: this.props.editing,
			author_id: this.props.author_id || '',
			name: this.props.name || '',
			age: this.props.age || ''
		}
	}
	
	
  static propTypes = {
	edit: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newAuthor: PropTypes.bool,
	author_id: PropTypes.number
  }


  handleSubmit() {
	  
	  if (this.state.editing) {
		  this.props.edit(this.state.author_id,this.state.name,this.state.age)
	  } else { 
      this.props.onSave(
	  this.state.name,
	  this.state.age);
        this.setState({
			name: '',
			age: ''
			})
      }
  }


  handleNameChange(e) {
    this.setState({ name: e.target.value })
  }

  handleAgeChange(e) {
	  this.setState({ age: e.target.value })
  }
  


  render() {
	  
    return (
	<div>
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newTodo
        })}
        type="text"
        placeholder="what is your name"
        autoFocus="true"
        value={this.state.name}
        onChange={this.handleNameChange.bind(this)} />;
	
	 <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newAuthor
        })}
        type="number"
		placeholder="what is your age"
        autoFocus="true"
        value={this.state.age}
        onChange={this.handleAgeChange.bind(this)} />;
		
	<Button color="success" onClick={this.handleSubmit.bind(this)}> Save Author </Button>;
	</div>
    )
  }
}
