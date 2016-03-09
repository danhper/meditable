import {expect} from 'chai'

import meditable from '..'

describe('meditable', function () {
  function makeContainer(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return div
  }

  describe('fromHTML', function () {
    describe('b tag', function () {
    })

    describe('complex document', function () {
      const html = require('./fixtures/dummy-1.html')
      const div = makeContainer(html)

      it('should transform to markdown')
    })
  })
})
