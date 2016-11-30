
import React, {Component} from 'react'

export default class OffCanvas extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (!this.props.show) return <div />
    return (
      <div onClick={this.props.hide} className={`off-canvas ${this.props.show ? 'in' : ''}`}>
        <div className="off-canvas-inner" onClick={(e) => { e.stopPropagation() }}>
          { this.props.children }
        </div>
      </div>
    )
  }
}
