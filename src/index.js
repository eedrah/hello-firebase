import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'
const scriptjs = require('scriptjs')

const reactApp = document.createElement('div')
document.body.appendChild(reactApp)

const isProd = process.env.NODE_ENV === 'production'

const getModule = function (module, callback) {
  const address = isProd
    ? `http://eedrah.com/${module}/main.js`
    : 'http://localhost:8080/main.js'
  scriptjs(address, () => {
    callback(null, window[module])
  })
}

const getComponent = function (module, callback) {
  getModule(module, (err, moduleExport) => callback(null, moduleExport.component))
}
const getChildRoutes = function (module, callback) {
  getModule(module, (err, moduleExport) => callback(null, moduleExport.childRoutes))
}

const routes = {
  path: '/',
  component: require('./App'),
  childRoutes: [
    {
      path: 'hello',
      getComponent: (location, callback) => getComponent('HelloRepo', callback),
      getChildRoutes: (location, callback) => getChildRoutes('HelloRepo', callback)
    },
    {
      path: 'javascript-quirks-exploits',
      getComponent: (location, callback) =>
      getComponent('javascript-quirks-exploits-segment', callback)
    }
  ]
}

render((<Router history={browserHistory} routes={routes} />), reactApp)
