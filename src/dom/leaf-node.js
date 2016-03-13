import Node   from './node'
import assert from 'assert'

export default class LeafNode extends Node {
  constructor(children) {
    super([])
    assert(!children || children.length === 0, `${this.constructor.name} cannot have children`)
  }
}
