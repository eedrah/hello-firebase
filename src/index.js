const db = require('./db')
const text = require('./textbox')

text.addEventListener('input', () => {
  db.ref('/').set(text.value)
})

// function listenerCallback (value) {
//   console.log('listen callback fired! Value is:')
//   // console.log(value)
//   // console.log('and the val() method returns:')
//   console.log(value.val())
// }
//
// console.log('making read listener')
// db.ref('test').on('value', listenerCallback)
// //
// // console.log('writing data')
// // db.ref('test').set('this is a test')
// //
// // console.log('listening once...')
// // db.ref('test').once('value', listenerCallback)
