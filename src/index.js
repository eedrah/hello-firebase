import db from './db'
import text from './textbox'

const ref = db.ref('/')

ref.on('value', (data) => {
  text.value = data.val()
})

text.addEventListener('input', () => {
  ref.set(text.value)
})
