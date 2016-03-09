import {expect} from 'chai'
import HTMLFormatter from '../../src/formatters/html'
import dom from '../../src/dom'

describe('HTMLFormatter', function () {
  const formatter = new HTMLFormatter()

  describe('bold', function () {
    const node = new dom.Bold([new dom.Text('hello')])

    it('should render <b> tag', function () {
      expect(formatter.render(node)).to.eq('<b>hello</b>')
    })
  })
})
