import {expect}         from 'chai'
import {AssertionError} from 'assert'
import {dom}            from 'meditable'

describe('dom', () => {
  describe('node', () => {
    it('should throw if children are not an array', () => {
      expect(() => new dom.Node('foo')).to.throw(AssertionError)
    })
    it('should throw if one of the children is not a node', () => {
      expect(() => new dom.Node(['foo'])).to.throw(AssertionError)
    })
    it('should have no children by default', () => {
      expect(new dom.Node().children.length).to.eq(0)
    })
  })

  describe('heading', () => {
    it('should throw if size is not valid', () => {
      expect(() => new dom.Heading(8)).to.throw(AssertionError)
    })
    it('should have a size property', () => {
      expect(new dom.Heading(1).size).to.eq(1)
    })
  })

  describe('Link', () => {
    it('should have an url property', () => {
      const url = 'http://example.com'
      expect(new dom.Link(url).url).to.eq(url)
    })
  })

  describe('Image', () => {
    it('should have source and text properties', () => {
      const source = 'http://example.com'
      const text   = 'image'
      const node = new dom.Image(source, text)
      expect(node.source).to.eq(source)
      expect(node.text).to.eq(text)
    })
  })

  describe('LeafNode', () => {
    it('should throw if given children', () => {
      expect(() => new dom.LeafNode([new dom.Text('whatever')])).to.throw(AssertionError)
    })
  })
})
