import assign from 'object-assign'

export default class BaseFormatter {
  constructor(options) {
    this.options = options || {}
  }

  render(node, options) {
    const capitalizedName = node.name[0].toUpperCase() + node.name.substring(1)
    const method = `render${capitalizedName}`
    options = options || {depth: 0}
    options = assign({}, options, {depth: options.depth + 1})
    if (this[method]) {
      return this[method](node, options)
    }
    return this.fallbackRender(node)
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
