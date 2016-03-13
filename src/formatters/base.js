import assign from 'object-assign'

export default class BaseFormatter {
  constructor(options) {
    this.options = options || {}
  }

  configure(options) {
    assign(this.options, options)
  }

  render(node, options) {
    const method = `render${node.name}`
    options = options || {depth: 0}
    options = assign({}, options, {depth: options.depth + 1})
    if (this[method]) {
      return this[method](node, options)
    }
    return this.fallbackRender(node)
  }

  renderNode(node, options) {
    return this.renderChildren(node, options)
  }

  renderChildren(node, options) {
    if (!node.children || node.children.length === 0) {
      return ''
    }
    options = assign({}, options, {depth: options.depth + 1})
    return node.children.map((child, index) => {
      return this.render(child, assign({}, options, {index: index}))
    }).join(this.getNodeSeparator(options))
  }

  getNodeSeparator(options) {
    return options.separator || this.defaultNodeSeparator
  }

  get defaultNodeSeparator() {
    return ''
  }
}
