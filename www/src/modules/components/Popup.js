
import React, {Component} from 'react'

export default class Popup extends Component {

  render() {
    if (!this.props.show) return <div />
    return (
      <div className="popup">
        <div className="popup-inner">
          { this.props.children }
        </div>
      </div>
    )
  }

}
