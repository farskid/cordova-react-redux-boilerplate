import React, {Component} from 'react'

export default class Audio extends Component {

  constructor(props) {
    super(props)
    this.rand = Math.floor(9999 * Math.random() + 1)
    this.audio = null
  }

  componentDidMount() {
    this.audio = new Media(this.props.source, null, null, (status) => {
      if (status == Media.MEDIA_STOPPED && this.props.loop && !this.props.pause) {
        this.audio.play()
      }
    })
    this.audio.play()
  }

  componentWillUpdate(nextProps) {
    if (this.audio) {
      if (nextProps.pause) {
        this.audio.pause()
      } else {
        this.audio.play()
      }
    }
  }

  render() {
    return (
      <audio ref={`audio-${this.rand}`} src={this.props.source} />
    )
  }

}
