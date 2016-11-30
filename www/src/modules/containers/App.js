import React, { Component, PropTypes } from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="app">
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const {} = state.entities
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
