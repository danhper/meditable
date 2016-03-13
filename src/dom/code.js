import Node from './node'

export default class Code extends Node {
  constructor(language, children) {
    super(children)
    this.language = language
  }

  get name() {
    return 'Code'
  }
}
