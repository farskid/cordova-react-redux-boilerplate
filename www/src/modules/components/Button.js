
import React, {Component} from 'react'

export default class Button extends Component {

  render() {

    const {position, type} = this.props

    return (
      <button {...this.props} >
        {this.props.children}
      </button>
    )
  }

}
