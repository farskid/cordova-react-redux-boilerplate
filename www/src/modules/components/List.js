import React, {Component} from 'react'

export default class List extends Component {

  constructor(props) {
    super(props)
    this.renderItems = this.renderItems.bind(this)
  }

  renderItems() {
    if (!this.props.items) return <span />
    return this.props.items.map((item, i) => <li className="btn btn-block btn-long" key={i}>{item}</li>)
  }

  render() {
    return (
      <ul className={`table-view ${this.props.hasActions ? 'has-actions' : ''}`}>
        {this.renderItems()}
        {this.props.children}
      </ul>
    )
  }

}
