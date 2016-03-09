import BaseFormatter from './base'

export default class MarkdownFormatter extends BaseFormatter {
  renderLink(node) {
    return `[${this.renderChildren(node)}](${node.url})`
  }

  renderImage(node) {
    return `![${node.text}](${node.source})`
  }

  renderItalic(node) {
    return `*${this.renderChildren(node)}*`
  }

  renderBold(node) {
    return `**${this.renderChildren(node)}**`
  }

  renderOrderedList(node) {
    return `\n${this.renderChildren(node, {ordered: true})}\n`
  }

  renderUnrderedList(node) {
    return `\n${this.renderChildren(node, {ordered: false})}\n`
  }

  renderBlockquote(node) {
    return `> ${this.renderChildren(node, {separator: ('\n> ')})}`
  }

  renderListItem(node, options) {
    if (options.ordered) {
      return `${options.index}. ${this.renderChildren(node, options)}`
    }
    return `* ${this.renderChildren(node, options)}`
  }

  renderText(node) {
    return node.text
  }
}
