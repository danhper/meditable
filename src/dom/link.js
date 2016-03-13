import Node from './node'

export default class Link extends Node {
  constructor(url, children) {
    super(children)
    this.url = url
  }

  get name() {
    return 'Link'
  }
}
