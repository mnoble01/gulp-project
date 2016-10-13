import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import NAV_LINKS from 'lib/nav-links'
import Nav from 'components/nav'


class App extends Component {
  render () {
    return (
      <div>
        <section id='sidebar'>
          <h4>
            App Name Here
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

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to={NAV_LINKS[0].path} />
      {NAV_LINKS.map((link, i) => {
        return <Route key={link.path} path={link.path} component={link.component} pageTitle={link.text} />
      })}
    </Route>
  </Router>,
  document.getElementById('app')
)

export default {}