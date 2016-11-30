
import React, {Component} from 'react'

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className={"bar bar-nav " + (this.props.className || '')}>{ this.props.children }</header>
    )
  }
}
