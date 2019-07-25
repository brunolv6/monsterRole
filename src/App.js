import React, { Component } from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.component';

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

  render () {
    return (
      <div className="App">
        <h1>Bruno</h1>
        <input 
          type="search"
          placeholder="choose a monster"
          onChange={(e) => (this.setState({searchField: e.target.value}, ()=> console.log(this.state.searchField)))}
        />
        <CardList monster={this.state.monster}/>
      </div>
    );
  }
}

export default App;
