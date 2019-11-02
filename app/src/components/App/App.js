import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  componentDidMount() {
    axios.get('https://www.bungie.net/Platform')
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="app">
        App
      </div>
    );
  }
}

export default App;
