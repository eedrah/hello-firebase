const firebase = require('firebase/app')
require('firebase/database')

firebase.initializeApp({
  apiKey: 'AIzaSyCSFQb7W5F4gP-Gs9NL6xUwcG4PRPFyVPQ',
  authDomain: 'hello-world-3ac85.firebaseapp.com',
  databaseURL: 'https://hello-world-3ac85.firebaseio.com',
  storageBucket: 'hello-world-3ac85.appspot.com',
  messagingSenderId: '91406665512'
})

function listenerCallback (value) {
  console.log('listen callback fired! Value is:')
  console.log(value)
  console.log('and the val() method returns:')
  console.log(value.val())
}

console.log('initialized')

const db = firebase.database()

console.log('making read listener')
db.ref('test').on('value', listenerCallback)

console.log('writing data')
db.ref('test').set('this is a test')

console.log('listening once...')
db.ref('test').once('value', listenerCallback)
