import assert from 'assert'
import Node   from './node'

export default class Heading extends Node {
  constructor(size, children) {
    super(children)
    assert(size >= 1 && size <= 6, 'Heading size should be between 1 and 6')
    this.size = size
  }

  get name() {
    return 'Heading'
  }
}
