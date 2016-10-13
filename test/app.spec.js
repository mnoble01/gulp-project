import React from 'react' // required to get test to work.  we can get around this later with more configuration
import { shallow } from 'enzyme' // method from enzyme which allows us to do shallow render
// import 'test/helper'
import App from 'app'
// import App from 'src/app'

function wrapper () {
  return shallow(<AppRoot />)
}

describe('(Container) App', () => {
  it('renders as a <div>', () => {
    expect(wrapper().type()).to.eql('div')
  })

  it('has style with height 100%', () => {
    const expectedStyles = {
      height: '100%'
    }
    expect(wrapper().prop('style')).to.eql(expectedStyles)
  })

  it('contains a header explaining the app', () => {
    expect(wrapper().find('#sidebar h4')).to.have.length(1)
  })

  it('has a content div', () => {
    expect(wrapper().find('#content')).to.have.length(1)
  })
})