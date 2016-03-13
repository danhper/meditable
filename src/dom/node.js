import assert from 'assert'

export default class Node {
  constructor(children = []) {
    assert(Array.isArray(children), `children must be an array, got ${children}`)
    children.forEach((child) => {
      assert(child instanceof Node, `All children must be instances of Node, got ${child}`)
    })
    this.children = children
  }

  get name() {
    return 'Node'
  }
}
