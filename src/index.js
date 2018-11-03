import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './libs/serviceWorker'
import App from './libs/app'

import './index.css'

const root = document.getElementById('root')

ReactDOM.render(<App />, root)

serviceWorker.unregister()
