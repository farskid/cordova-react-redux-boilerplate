
import React, {Component, PropTypes} from 'react'

export default class Date extends Component {

  render() {
    return (
      <span className="date">
        {this.props.date}
      </span>
    )
  }

}
