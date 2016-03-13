import {dom} from 'meditable'

export default {
  makeListItems: function (...texts) {
    return texts.map((text) => new dom.ListItem([new dom.Text(text)]))
  }
}
