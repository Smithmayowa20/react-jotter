import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import AuthorRadioSelector from './AuthorRadioSelector'
import { Button } from 'reactstrap';


export default class PostInput extends Component {
	constructor(props) {
        super(props);
		
		this.state = {
			editing: this.props.editing,
			post_id: this.props.post_id || '',
			title: this.props.title || '',
			text: this.props.text || '',
			author_id: this.props.author_id || '',
			show_author: this.props.show_author,
		}	
  }
	
  static propTypes = {
	onSave: PropTypes.func.isRequired,
    text: PropTypes.string,
	title: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool,
    newTodo: PropTypes.bool,
	author_id: PropTypes.number,
	post_id: PropTypes.number,
	edit: PropTypes.func.isRequired,
	authors: PropTypes.array.isRequired,
	show_author: PropTypes.bool,
  }


  handleSubmit() {
	  
	  if (this.state.editing) {
		  this.props.edit(this.state.post_id,this.state.title,this.state.text)
	  } else { 
      this.props.onSave(
	  this.state.title,
	  this.state.text,
	  this.state.author_id
	  );
        this.setState({ 
			title: '',
			text: '' ,
			author_id: ''
			})
      }
  }


 handleTitleChange(e) {
    this.setState({ title: e.target.value })
  }

  handleTextChange(e) {
	  this.setState({ text: e.target.value })
  }

  handleAuthor_idChange(e) {
	  this.setState({ author_id: e })
  }
  
  render() {
	  let show;
	  if (this.state.show_author) {
			show = <AuthorRadioSelector author_id={this.author_id} authors={this.props.authors}
				func={this.handleAuthor_idChange.bind(this)} />;
		}
    return (
	<div>
      <input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newPost
        })}
        type="text"
        placeholder="enter text"
        autoFocus="true"
        value={this.state.title}
        onChange={this.handleTitleChange.bind(this)} />;
		
		<input className={
        classnames({
          edit: this.props.editing,
          'new-todo': this.props.newPost
        })}
        type="text"
        placeholder="enter text"
        autoFocus="true"
        value={this.state.text}
        onChange={this.handleTextChange.bind(this)} />;
		
		{show}
		
		<Button color="success" onClick={this.handleSubmit.bind(this)} > Save Post </Button>;
		</div>
    )
  };
}
