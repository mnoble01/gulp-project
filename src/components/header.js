import React, {Component} from 'react'

export default class Header extends Component {
  static propTypes = {
    text: React.PropTypes.string.isRequired
  }

  render () {
    return (
      <header>{this.props.text}</header>
    )
  }
}
