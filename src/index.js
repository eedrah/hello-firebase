import db from './db'
import text from './textbox'
import verifyHttps from './verifyHttps'

verifyHttps(() => {
  const ref = db.ref('/')

  ref.on('value', (data) => {
    text.value = data.val()
  })

  text.addEventListener('input', () => {
    ref.set(text.value)
  })
})
