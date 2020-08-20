import React from 'react';
import './App.css';
import CurrentLocation from './components/ currentLocation'

class App extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return (
      <div>
      <CurrentLocation />
      </div>
    );
  }
} 


export default App;
