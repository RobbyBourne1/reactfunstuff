import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>I am in the root element</p>
        <Person />
      </div>    
   );
  //  return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am a React App!!'))
  }
}
export default App;
