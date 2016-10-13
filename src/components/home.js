import React, {Component} from 'react'
import BackboneReactComponent from 'backbone-react-component'

import Header from 'components/header'

export default class Home extends Component {
  mixins: [BackboneReactComponent]

  constructor(...args) {
    super(...args)
  }

  render () {
    return (
      <div id='home'>
        <Header text={this.props.route.pageTitle} />
        Page content here
      </div>
    )
  }
}