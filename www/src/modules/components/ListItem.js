import React, {Component} from 'react'

export default class ListItem extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li className="table-view-cell" {...this.props} key={this.props.key}>
        {this.props.children}
      </li>
    )
  }

}
