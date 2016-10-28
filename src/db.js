const firebase = require('firebase/app')
require('firebase/database')

firebase.initializeApp({
  apiKey: 'AIzaSyCSFQb7W5F4gP-Gs9NL6xUwcG4PRPFyVPQ',
  authDomain: 'hello-world-3ac85.firebaseapp.com',
  databaseURL: 'https://hello-world-3ac85.firebaseio.com',
  storageBucket: 'hello-world-3ac85.appspot.com',
  messagingSenderId: '91406665512'
})

module.exports = firebase.database()
