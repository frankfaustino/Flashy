import * as React from 'react'
import { shallow } from 'enzyme'

import Footer from '../Footer'

describe('Footer', () => {
  it('renders footer', () => {
    const footer = shallow(<Footer />)
    expect(footer.find('h3').text()).toEqual('footer')
  })
})