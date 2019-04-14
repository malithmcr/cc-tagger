import React, { Component } from 'react'

import CcTagger from 'react-cc-tagger'

export default class App extends Component {
  render () {
    return (
      <div>
        <CcTagger tags={['tag1', 'tag2', 'tag3']} />
      </div>
    )
  }
}
