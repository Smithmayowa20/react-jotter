import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'


export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
  }

  renderTodoCount() {
    const { completedCount } = this.props
    const itemPostWord = completedCount === 1 ? 'item' : 'items'

    return (
	<div>
      <span className="todo-count">
        <strong>{completedCount || 'No'}</strong> {itemPostWord} left
      </span>
	 </div>
    )
  }


  render() {
    return (
      <footer className="footer">
        {this.renderTodoCount()}
      </footer>
    )
  }
}
