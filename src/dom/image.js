import LeafNode from './leaf-node'

export default class Image extends LeafNode {
  constructor(source, text) {
    super()
    this.source = source
    this.text = text
  }
}
