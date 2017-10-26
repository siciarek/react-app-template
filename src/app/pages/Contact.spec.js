/**
 * Contact.spec.js
 */
import React from 'react'
import {getProps, renderComponent, renderShallowComponent} from '../../utils/testHelper'
import {lorem} from 'faker'
import {expect} from 'chai'
import {map} from 'lodash'

import Contact from './Contact'

describe('Contact', () => {

  let element = null

  beforeEach(() => {
    element = <Contact/>
  })

  it('can render without error', () => {

    expect(() =>  {
      const component = renderComponent(element)
    }).not.to.throw()
  })

  it('has default props set up', () => {

    const component = renderComponent(element)
    const props = getProps(component)

    map(element.defaultProps, (val, key) => {
      expect(props[key]).to.equal(val)
    })
  })
})
