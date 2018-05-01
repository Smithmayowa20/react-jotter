import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AuthorInput from './AuthorInput'
import PostInput from './PostInput'
import { Button } from 'reactstrap';


export default class Header extends Component {
		constructor(props) {
        super(props);
		
		this.state = {
		add_author : true,
		show_author : false,
		}	
	}
	
  static propTypes = {
	addPost: PropTypes.func.isRequired,
	addAuthor: PropTypes.func.isRequired
  }
  
  
  
  handlePostSave = (title,text,author_id) => {
    if (text.length !== 0) {
		if (title.length !== 0){
		  if ( author_id !== 0 ){  
			this.props.addPost(title,text,author_id);
		  }
	    }
     }
  }
  
  handleAuthorSave = (name,age) => {
	  if (name.length !== 0) {
		  if (age !== 0){
			  this.props.addAuthor(name,age);
				}
		  }
  }
  
  handleToggle() {
	  this.setState({ add_author : !this.state.add_author });
  }
	  
  render() {
	  let render_author_input;
	  const { authors } = this.props;
	  let add_or_not_add;
	  
	  if (this.state.add_author) {
		  render_author_input = <AuthorInput newauthor
                       onSave={this.handleAuthorSave} />;
	  }
	  
	  if (this.state.add_author) {
		  add_or_not_add = "Hide AuthorInput"
	  } else {
		  add_or_not_add = "Show AuthorInput"
	  }
					   
    return (
      <header className="header">
	  
        <Button color="primary" onClick={this.handleToggle.bind(this)}>
			{add_or_not_add}
		</Button>
		
		{render_author_input} 

		<br/>
		<PostInput newpost authors={authors} show_author={this.state.show_author}
					   onSave={this.handlePostSave} />
      </header>
    )
  }
}
		  