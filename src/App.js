import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

// Class decorator allow us to declare state of the application

class App extends Component {
  // create constructor
  constructor() {
    // call the parent constructor
    super();

    // set the base state
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree)
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }

  render() {

    // destructuring
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">

        <h1>Monsters Rolodex</h1>

        {/* Resuable searchbox component */}
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />

        {/* Filtered array list pass down into CardList Component for search functionality */}
        <CardList monsters={filteredMonsters} />
          {/* Write JavaScript using {} brackets */}
          {/*{
            this.state.monsters.map(
              monster => <h1 key={monster.id}>{ monster.name }</h1>
            )
          }
        </CardList>*/}
      </div>
    )
  }
}


export default App;
