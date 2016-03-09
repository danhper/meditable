export default class Node {
  constructor(children) {
    this.children = children
  }

  get name() {
    return this.constructor.name.toLowerCase()
  }
}
