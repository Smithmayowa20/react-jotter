import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import PostInput from './PostInput'
import { Button } from 'reactstrap';

export default class TodoItem extends Component {
	constructor(props) {
        super(props);
		
  this.state = {
	editing_post: false,
	show_author: false,
	}
 }
  
  static propTypes = {
    post: PropTypes.object.isRequired,
    editPost: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
  }



  handlePostDoubleClick() {
    this.setState({ editing_post: true })
  }
  
  handleSave = (id, title, text) => {
    if (text.length === 0) {
      this.props.deletePost(id)
    } else {
      this.props.editPost(id, title, text)
    }
    this.setState({ editing_post: false })
  }

  render() {
    const { post,  deletePost, authors } = this.props
	
	const post_element = () => {
    if (this.state.editing_post) {
		return(
        <PostInput post_id={post.id} title={post.title} text={post.text} authors={authors} author_id={post.author_id}
                       editing={this.state.editing_post} 
                       edit={this.handleSave} show_author={this.state.show_author} />
      )
    } else {
	  return(
        <div className="view">
          <label onDoubleClick={this.handlePostDoubleClick.bind(this)}>
			<h3> {post.title} </h3>
			<h4>{post.text}</h4>
			<h6>Author_id : {post.author_id}</h6>
          </label>
          <Button color="danger" className="destroy" onClick={() => deletePost(post.id)} > Delete </Button>
        </div>
		)
	  }
    } 

    return (
	  <div>
	  <li className={classnames({
        editing: this.state.editing_post
      })}>
	  {post_element()}
      </li>
	  </div>
    )
  }
}
