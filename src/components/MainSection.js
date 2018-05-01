import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PostItem from './PostItem'
import PostFooter from './PostFooter'
import AuthorItem from './AuthorItem'
import AuthorFooter from './AuthorFooter'


export default class MainSection extends Component {
	constructor(props) {
        super(props);
		

  this.state = { show_authors: true,
		}
	}
	
  static propTypes = {
    posts: PropTypes.array.isRequired,
	authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  renderToggleAuthor() {
    this.setState({ show_authors: !this.state.show_authors })
  }

  renderPostFooter() {
    const { posts } = this.props
    const activePostCount = posts.length

    if (posts.length) {
      return (
        <PostFooter completedCount={activePostCount} />
      )
    }
  }

  renderAuthorFooter() {
    const { authors } = this.props
	const activeAuthorCount = authors.length

    if (authors.length) {
      return (
        <AuthorFooter completedCount={activeAuthorCount} />
      )
    }
  }
  
  editAuthorItem() {
  }
  
  editPostItem() {
  }
  
  render_button_text() {
		let button_text;
		if (this.state.show_authors){
				button_text = "Hide Authors"
		}
       else {
				button_text = "Show Authors"
	   }
		return ( button_text )
	}
  
   
  
  render() {
    const { authors, posts, actions } = this.props
	
	const render_authors = () => {
	if (this.state.show_authors) {
			return (
			<section className="main">
			<h2> Authors Items </h2>
			<br/>
        <ul className="todo-list">
          {authors.map(author => 
		  <div>
            <AuthorItem key={author.id} author={author} {...actions} />
			<br/>
		  </div>
          )}
        </ul>
        {this.renderAuthorFooter()}
      </section>
			)
		}
	}
		
    return (
	<div>
	<br/>
	<button onClick={this.renderToggleAuthor.bind(this)}> {this.render_button_text()} </button>
	  { render_authors() }
	  <br/>
	  <br/>
	  <br/>
	  <br/>
	  <br/>
	  <br/>
	  <section className="main">
	  <h2> Posts Items </h2>
        <ul className="todo-list">
          {posts.map(post => <div>
            <PostItem key={post.id} post={post} {...actions} authors={authors}/>
			<br/>
			</div>
          )}
        </ul>
        {this.renderPostFooter()};
	  </section>
	</div>
	)
  }
}
