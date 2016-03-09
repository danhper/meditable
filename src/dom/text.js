import LeafNode from './leaf-node'

export default class Text extends LeafNode {
  constructor(text) {
    super()
    this.text = text
  }
}
