import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Nav extends Component {
  static propTypes = {
    links: React.PropTypes.array.isRequired
  }

  render () {
    return (
      <nav>
        <ul>
          {this.props.links.map((l) => {
            const path = l.path
            return <li key={path}>
              <Link to={path} activeClassName='active'> {l.text} </Link>
            </li>
          })}
        </ul>
      </nav>
    )
  }
}
