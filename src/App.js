import React from 'react'
import { Link } from 'react-router'

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>Eedrah.com</h1>
        <p>Site build in progress (Apr 2016)</p>
        <Link to='hello'>Go to test</Link>
        {' '}
        <Link to='javascript-quirks-exploits'>Go to Javascript Quirks and Exploits</Link>
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = { children: React.PropTypes.node }

module.exports = App
