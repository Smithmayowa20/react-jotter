import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/index'

const App = ({authors, posts, actions}) => (
  <div>
    <Header authors={authors} addAuthor={actions.addAuthor} addPost={actions.addPost} />
    <MainSection posts={posts} authors={authors} actions={actions} />
  </div>
)

App.propTypes = {
  posts: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  posts: state.posts,
  authors: state.authors
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)