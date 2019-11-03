import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import GearCard from '../GearCard/GearCard';

class App extends Component {
  componentDidMount() {
    axios.get('https://www.bungie.net/Platform')
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="app">
        {Array(9).fill("Foo").map(x => <GearCard content={x} />)}
      </div>
    );
  }
}

export default App;
