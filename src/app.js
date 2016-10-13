import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import NAV_LINKS from 'lib/nav-links'
import Nav from 'components/nav'


export class App extends Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  render () {
    return (
      <div>
        <section id='sidebar'>
          <h4>
            Gulp Starter Project
            <span className='smile'>:)</span>
          </h4>
          <Nav links={NAV_LINKS} />
        </section>
        <section id='content'>
          {this.props.children}
        </section>
      </div>
    )
  }
}

export class AppRouter extends Component {
  static propTypes = {
    links: React.PropTypes.array
  }

  static get defaultProps () {
    return {
      links: NAV_LINKS
    }
  }

  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRedirect to={this.props.links[0].path} />
          {this.props.links.map(link => (
            <Route key={link.path} path={link.path} component={link.component} pageTitle={link.text} />
          ))}
        </Route>
      </Router>
    )
  }
}

function startApp () {
  ReactDOM.render(
    <AppRouter />,
    document.getElementById('app')
  )
}
window.addEventListener('DOMContentLoaded', startApp, false)

export default AppRouter
