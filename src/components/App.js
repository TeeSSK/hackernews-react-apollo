import './../styles/App.css'
import React, { Component } from 'react'
import LinkList from './LinkList'
import CreateLink from './CreateLink'

class App extends Component {
  render() {
    return (
      <div>
        <CreateLink />
        <LinkList />
      </div>
    )
  }
}

export default App
