import React from 'react'
import {shallow} from 'enzyme'

import {App} from 'app'

function wrapper () {
  return shallow(<App />)
}

describe('(Container) App', () => {
  it('renders as a <div>', () => {
    expect(wrapper().type()).toBe('div')
  })

  it('contains a header explaining the app', () => {
    expect(wrapper().find('#sidebar h4').length).toBe(1)
  })

  it('has a content div', () => {
    expect(wrapper().find('#content').length).toBe(1)
  })
})