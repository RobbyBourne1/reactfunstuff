import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class App extends Component {
  state = {
    persons: [
      {name: 'Robby', age :25},
      {name: 'Bob', age: 12},
      {name: 'Rodger', age: 98}
    ],
    usernames: [
      {username: 'Wubz93'},
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('Was Clicked');
    this.setState({
      persons: [
        {name: newName, age :95},
        {name: 'Bob', age: 12},
        {name: 'Rodger', age: 108}
      ]
     })
  }

    nameChangedHandler = (event) => {
      this.setState({
        persons: [
          {name: event.target.value, age :95},
          {name: event.target.value, age: 12},
          {name: event.target.value, age: 108}
        ]
    })
  }

  userNameChangeHandler = (event) => {
    this.setState({
      usernames: [
        {username: event.target.value},
      ]
  })
}

colorChangeHandler = (event) => {

}

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit', 
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    const style2 = {
      border: '1em solid blue',
      padding: '1em',
      color: 'red'
    }

    return (
      <div className="App">
        <h1>Hi I'm a React App</h1>
        <p>I am in the root element</p>
        <button style={style} onClick={() => this.switchNameHandler('Roberto')}>Switch Names</button>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/>
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'Waka')}
        change={this.nameChangedHandler}>Waka Flocka</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
        <UserInput
        username={this.state.usernames[0].username}
        change={this.userNameChangeHandler}/>
        <UserOutput
        username={this.state.usernames[0].username}
        />
        <button style={style2} onClick={() => this.colorChangeHandler()}>Switch Colors</button>
        
      </div>    
   );
  //  return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'I am a React App!!'))
  }
}
export default App;
