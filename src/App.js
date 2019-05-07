import React, { Component } from 'react';
import './App.css';
import AllPets from './AllPets'
import PetsById from './petsById';

class App extends Component {
  render(){
  return (
      <div>
        <AllPets />
        <PetsById />
      </div>
   )
  } 
}
export default App;

