import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/searchBox/searchBox.component';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monster: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resposta => resposta.json())
      .then(users => this.setState({monster: users}))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render () {
    
    const { monster, searchField } = this.state;
    const filteredMonsters = monster.filter( m => (
      m.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className="App">
        <h1>Monsters</h1>
        <SearchBox 
          placeholder='search monsters' 
          handleChange={this.handleChange}/>
        <CardList monster={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
