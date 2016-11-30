import React, {Component, PropTypes} from 'react'

export default class Icon extends Component {

  render() {
    return (
      <span className={"icon " + this.props.icon} />
    )
  }

}

Icon.PropTypes = {
  icon: PropTypes.string.isRequired
}
