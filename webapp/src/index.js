import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import { uniqueId } from 'lodash'

import './index.html'

import Api from './api'
import { debug } from 'util';

const api = new Api();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stuff: [],
      val: ''
    }
  }
  addStuff = async (e) => {
    const { val } = this.state
    await api.addStuff(val)
    this.getStuff()
  }
  getStuff = async () => {
    const stuff = await api.getStuff()
    this.setState({ stuff })
  }
  onValChange = (e) => {
    this.setState({ val: e.target.value })
  }
  render() {
    const { stuff, val } = this.state
    const stuffNodes = stuff.map(s => <p key={uniqueId()}>{s}</p>)

    let styles = { color: '#fff' }
    if (STACK === 'none') {
      styles.background = '#736f6f'
    } else if (STACK === 'development') {
      styles.background = '#08008a'
    } else if (STACK === 'production') {
      styles.background = '#8a0000'
    }
    
    return (
      <div>
        <div>Webapp for POC stack!</div>
        <div style={styles}>Current Stack: {STACK}</div>
        <br />
        <input type="textbox" onChange={this.onValChange} value={val} />
        <button onClick={this.addStuff}>add stuff</button>
        <button onClick={this.getStuff}>get stuff</button>
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
