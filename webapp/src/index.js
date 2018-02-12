import React from 'react'
import ReactDOM from 'react-dom'

import './index.html'

import Api from './api'

var api = new Api();

api.test();

class App extends React.Component {
    render() {
        return (<div>this is the web app the stack's poc</div>)
    }
}

ReactDOM.render(<App />, document.getElementById('mount'));

if (module.hot) {
    module.hot.accept()
}
