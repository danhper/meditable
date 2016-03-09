import BaseFormatter from './base'

export default class HTMLFormatter extends BaseFormatter {
  renderLink(node, options) {
    return `<a href="${node.url}">${this.renderChildren(node, options)}</a>`
  }

  renderImage(node) {
    return this._makeSelfClosingTag(`img src="${this.source}" alt="${this.text}"`)
  }

  renderBold(node, options) {
    return `<b>${this.renderChildren(node, options)}</b>`
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

  renderText(node) {
    return node.text
  }

  _makeSelfClosingTag(content) {
    return `<${content}${this.options.html ? '/>' : '>'}`
  }
}
