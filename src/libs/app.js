import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'

import EditPage from '../pages/editPage'

export default class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path="/" component={EditPage} />
        </div>
      </HashRouter>
    )
  }
}
