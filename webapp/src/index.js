import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { uniqueId } from 'lodash'

import './index.html'

import Api from './api'

const api = new Api();

// const stuffData = api.getStuff();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stuff: []
    }
  }
  getStuff = async () => {
    const stuff = await api.getStuff()
    this.setState({ stuff })
  }
  render() {
    const { stuff } = this.state
    const stuffNodes = stuff.map(s => <p key={uniqueId()}>{s}</p>)
    return (  
      <div>
        <div>this is the web app the stack's poc</div>
        <button onClick={this.getStuff}>get stuff</button>
        <br />
        <br />
        {stuffNodes}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

if (module.hot) {
  module.hot.accept()
}
