import React from 'react'
import { shallow } from 'enzyme'

import App from './../../App'

it('renders without crashing', () => {
  const snap = shallow(<App />)
  expect(snap).toMatchSnapshot()
})
