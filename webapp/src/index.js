import React from 'react'
import ReactDOM from 'react-dom'
import { uniqueId } from 'lodash'

import './index.html'

import Api from './api'

var api = new Api();

const stuffData = api.getStuff();

class App extends React.Component {
  render() {
    const stuff = stuffData.map(s => <p key={uniqueId()}>{s}</p>)
    return (  
      <div>
        <div>this is the web app the stack's poc</div>
        <br />
        <br />
        {stuff}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('mount'));

if (module.hot) {
  module.hot.accept()
}
