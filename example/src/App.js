import React, { Component } from 'react'

import ReactTagger from 'react-tagger'

export default class App extends Component {
  render () {
    return (
      <div>
        <ReactTagger text='Modern React component module' />
      </div>
    )
  }
}
