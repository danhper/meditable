import Node from './node'

export default class Link extends Node {
  constructor(children, url) {
    super(children)
    this.url = url
  }
}
