import 'core-js/es6/object'
import 'core-js/es6/array'

const rootNode = document.querySelector('#app')
const text = document.createElement('textarea')
rootNode.appendChild(text)

const nodes = [text, rootNode, document.body, document.body.parentElement]
nodes.forEach(node => {
  Object.assign(node.style, {
    height: '100%',
    width: '100%',
    margin: 0,
    padding: 0,
    border: 0,
    'box-sizing': 'border-box',
    overflow: 'hidden'
  })
})
Object.assign(text.style, {
  resize: 'none',
  overflow: 'initial',
  padding: '2px'
})

module.exports = text
