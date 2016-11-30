import React, {Component, PropTypes} from 'react'
import {mergeObjects} from '../../utils'

export default class Fab extends Component {

  constructor(props) {
    super(props)
    this.setPosition = this.setPosition.bind(this)
    this.posMap = {
      top: {top: 15},
      right: {right: 15},
      bottom: {bottom: 15},
      left: {left: 15}
    }
  }

  setPosition() {
    let pos = this.props.position.split(' ')
    return mergeObjects(this.posMap[pos[0]], this.posMap[pos[1]])
  }



  render() {
    return (
      <button className={"btn fab " + (!this.props.show ? 'fab-hidden' : '')} style={this.setPosition()} {...this.props}>{this.props.children}</button>
    )
  }

}

Fab.PropTypes = {
  position: PropTypes.string.isRequired
}
