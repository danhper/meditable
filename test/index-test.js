import {expect} from 'chai'

import meditable from 'meditable'

describe('meditable', () => {
  function makeContainer(html) {
    const div = document.createElement('div')
    div.innerHTML = html
    return div
  }

  describe('fromHTML', () => {
    describe('complex document', () => {
      const html = require('./fixtures/dummy-1.html')
      const div = makeContainer(html)

      it('should transform to markdown')
    })
  })
})
