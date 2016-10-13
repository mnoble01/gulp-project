import React from 'react'
import {mount, render} from 'enzyme'

import Home from 'components/home'
import Header from 'components/header'
import NAV_LINKS from 'lib/nav-links'

function wrapper () {
  const route = NAV_LINKS[0]
  route.pageTitle = NAV_LINKS[0].text
  return mount(<Home route={route}/>)
}

describe('(Component) Home', () => {
  it('has an id equal to route path', () => {
    expect(wrapper().find('div').is(`#${NAV_LINKS[0].path}`)).toBe(true)
  })

  it('contains a route.pageTitle header describing the route', () => {
    expect(wrapper().find('header').text()).toBe(NAV_LINKS[0].text)
  })

  it('has page content', () => {
    expect(wrapper().text()).toContain('Page content here')
  })
})