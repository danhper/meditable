import BaseFormatter from './base'

export default class HTMLFormatter extends BaseFormatter {
  renderLink(node, options) {
    return `<a href="${node.url}">${this.renderChildren(node, options)}</a>`
  }

  renderHeading(node, options) {
    const tag = `h${node.size}`
    return `<${tag}>${this.renderChildren(node, options)}</${tag}>`
  }

  renderImage(node) {
    return this._makeSelfClosingTag(`img src="${node.source}" alt="${node.text}"`)
  }

  renderBold(node, options) {
    return `<b>${this.renderChildren(node, options)}</b>`
  }

  renderItalic(node, options) {
    return `<i>${this.renderChildren(node, options)}</i>`
  }

  renderLineBreak(_node) {
    return this._makeSelfClosingTag('br')
  }

  renderOrderedList(node, options) {
    return `<ol>${this.renderChildren(node, options)}</ol>`
  }

  renderUnorderedList(node, options) {
    return `<ul>${this.renderChildren(node, options)}</ul>`
  }

  renderListItem(node, options) {
    return `<li>${this.renderChildren(node, options)}</li>`
  }

  renderBlockquote(node, options) {
    return `<blockquote>${this.renderChildren(node, options)}</blockquote>`
  }

  renderCode(node, options) {
    return `<pre><code>${this.renderChildren(node, options)}</code></pre>`
  }

  renderText(node) {
    return node.text
  }

  _makeSelfClosingTag(content) {
    return `<${content}${this.options.xhtml ? ' />' : '>'}`
  }
}
