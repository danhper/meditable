import {expect}          from 'chai'
import {formatters, dom} from 'meditable'
import {domHelpers}      from '../support'

describe('HTMLFormatter', () => {
  let formatter

  beforeEach(() => {
    formatter = new formatters.HTML()
  })

  describe('nodes', () => {
    describe('text', () => {
      it('should output text', () => {
        const node = new dom.Text('hello')
        expect(formatter.render(node)).to.eq('hello')
      })
    })

    describe('heading', () => {
      it('should render <hX> tag', () => {
        let node = new dom.Heading(1, [new dom.Text('hello')])
        expect(formatter.render(node)).to.eq('<h1>hello</h1>')
        node = new dom.Heading(6, [new dom.Text('hello')])
        expect(formatter.render(node)).to.eq('<h6>hello</h6>')
      })
    })

    describe('bold', () => {
      it('should render <b> tag', () => {
        const node = new dom.Bold([new dom.Text('hello')])
        expect(formatter.render(node)).to.eq('<b>hello</b>')
      })
    })

    describe('italic', () => {
      it('should render <i> tag', () => {
        const node = new dom.Italic([new dom.Text('hello')])
        expect(formatter.render(node)).to.eq('<i>hello</i>')
      })
    })

    describe('link', () => {
      it('should render <a> tag with href', () => {
        const node = new dom.Link('http://example.com', [new dom.Text('hello')])
        expect(formatter.render(node)).to.eq('<a href="http://example.com">hello</a>')
      })
    })

    describe('image', () => {
      const node = new dom.Image('http://example.com/image', 'Image')

      it('should render <img> tag with src and alt', () => {
        expect(formatter.render(node)).to.eq('<img src="http://example.com/image" alt="Image">')
      })

      it('should render <img /> when using xhtml', () => {
        formatter.configure({xhtml: true})
        expect(formatter.render(node)).to.eq('<img src="http://example.com/image" alt="Image" />')
      })
    })

    describe('lineBreak', () => {
      const node = new dom.LineBreak()

      it('should render <br> tag', () => {
        expect(formatter.render(node)).to.eq('<br>')
      })

      it('should render <br /> when using xhtml', () => {
        formatter.configure({xhtml: true})
        expect(formatter.render(node)).to.eq('<br />')
      })
    })

    describe('orderedList', () => {
      it('should render <ol> tag', () => {
        const node = new dom.OrderedList()
        expect(formatter.render(node)).to.eq('<ol></ol>')
      })

      it('should allow children', () => {
        const node = new dom.OrderedList(domHelpers.makeListItems('hello', 'byebye'))
        expect(formatter.render(node)).to.eq('<ol><li>hello</li><li>byebye</li></ol>')
      })
    })

    describe('unorderedList', () => {
      it('should render <ul> tag', () => {
        const node = new dom.UnorderedList()
        expect(formatter.render(node)).to.eq('<ul></ul>')
      })

      it('should allow children', () => {
        const node = new dom.UnorderedList(domHelpers.makeListItems('hello', 'byebye'))
        expect(formatter.render(node)).to.eq('<ul><li>hello</li><li>byebye</li></ul>')
      })
    })

    describe('blockquote', () => {
      it('should render <blockquote> tag', () => {
        const node = new dom.Blockquote([new dom.Text('hello')])
        expect(formatter.render(node)).to.eq('<blockquote>hello</blockquote>')
      })
    })

    describe('code', () => {
      it('should render <code> tag', () => {
        const node = new dom.Code('ruby', [new dom.Text('hello')])
        expect(formatter.render(node)).to.eq('<pre><code>hello</code></pre>')
      })
    })
  })

  describe('document', () => {
    context('with empty document', () => {
      it('should return an empty string', () => {
        const node = new dom.Node()
        expect(formatter.render(node)).to.eq('')
      })
    })

    context('with children', () => {
      const node = new dom.Node([
        new dom.Heading(1, [new dom.Text('hello')]),
        new dom.Heading(2, [new dom.Text('this is a list')]),
        new dom.UnorderedList([
          new dom.ListItem([
            new dom.Text('this is a'),
            new dom.Link('http://example.com', [new dom.Text('link')]),
            new dom.Bold([new dom.Text('to a cool site')])
          ]),
          new dom.ListItem([
            new dom.Italic([new dom.Text(['and this is an image'])]),
            new dom.Image('http://example.com/image', 'image')
          ])
        ]),
        new dom.Heading(2, [new dom.Text('and this is code')]),
        new dom.Code(null, [new dom.Text('code here')])
      ])

      const expected = [
        '<h1>hello</h1>',
        '<h2>this is a list</h2>',
        '<ul>',
        '<li>',
        'this is a',
        '<a href="http://example.com">link</a>',
        '<b>to a cool site</b>',
        '</li>',
        '<li>',
        '<i>and this is an image</i>',
        '<img src="http://example.com/image" alt="image">',
        '</li>',
        '</ul>',
        '<h2>and this is code</h2>',
        '<pre><code>',
        'code here',
        '</code></pre>'
      ]

      it('should render all children', () => {
        expect(formatter.render(node)).to.eq(expected.join(''))
      })
    })
  })
})
