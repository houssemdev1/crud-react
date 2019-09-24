import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }
  state = {
    characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ],
  }
  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }
  render() {
    const { characters } = this.state
    return (
      <div className="App">
      <div className="d-flex justify-content-center">  <h1>User List</h1></div>
        <Table  characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
