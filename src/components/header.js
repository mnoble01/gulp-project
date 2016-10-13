import React, {Component} from 'react'

export default class Header extends Component {
  static get defaultProps () {
    return {
      text: ''
    }
  }

  render () {
    return (
      <header> {this.props.text} </header>
    )
  }
}