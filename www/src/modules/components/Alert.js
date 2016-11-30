import React, {Component} from 'react'
import Icon from './Icon'

export default class Alert extends Component {

  constructor(props) {
    super(props)
    this.renderClose = this.renderClose.bind(this)
  }

  renderClose() {
    if (!this.props.close) return <span />

    return (
      <span onClick={this.props.onClose} className="close"><Icon icon="icon-close" /></span>
    )
  }

  render() {
    return (
      <div className={"alert" + (this.props.type ? ' alert-' + this.props.type : '') + (!this.props.show ? ' hidden' : '')}>
        {this.renderClose()}
        {this.props.children}
      </div>
    )
  }

}
