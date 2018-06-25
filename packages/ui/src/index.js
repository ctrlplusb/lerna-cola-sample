import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import App from './components/app'

ReactDOM.render(<App />, document.getElementById('root'))

registerServiceWorker()
