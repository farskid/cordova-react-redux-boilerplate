import React, {Component, PropTypes} from 'react'

export default class Counter extends Component {

  constructor(props) {
    super(props)
    this.counter = this.counter.bind(this)
    this.interval = null
    this.state = {
      timer: 1
    }
  }

  componentDidMount() {
    let {counter} = this
    this.interval = setInterval(counter, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
    this.interval = null
  }

  counter() {
    this.setState({ timer: this.state.timer + 1 })
  }

  render() {
    return (
      <span className="counter">{this.state.timer} {this.props.label}</span>
    )
  }

}

Counter.PropTypes = {
  label: PropTypes.string.isRequired
}
