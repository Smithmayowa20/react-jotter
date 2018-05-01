import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

export default class AuthorRadioSelector extends Component {
	constructor(props) {
        super(props);
		
		this.state = {
		selectedOption:this.props.author_id || ''
		}
	}
	
	static propTypes = {
		author_id: PropTypes.number,
		authors: PropTypes.object.isRequired
	   }
	   
	changeAuthor(e) {
		this.setState({ selectedOption: parseInt(e.target.value) });
		this.props.func(parseInt(e.target.value));
	}
		
	render() {
	  const { authors, author_id } = this.props;
	  
	  const radio_element = () => {
		return (
		<div>
		{authors.map(author =>
		<div className="radio">
			<label>
				<input type="radio" name={author.name} value={author.id} 
						checked={this.state.selectedOption === author.id}
													onChange={this.changeAuthor.bind(this)} />
							{author.name}
			</label>
		</div>
		)}
		</div>)
	  }
	  
	  
	  return (
	  <div>
		{radio_element()}
	  </div>
		)
	}
 }
						