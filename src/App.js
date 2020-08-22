import React from 'react';
import './App.css';
import CurrentLocation from './components/ currentLocation'
import LocationTypeIn from './components/LocationTypeIn'
import store from './redux/store';
import { Provider } from 'react-redux';
import FetchWeather from './components/fetchWeather'

class App extends React.Component{

  constructor(props){
    super(props)
  }

  render(){

    return (
      <Provider store = {store}>
        <div>
        <LocationTypeIn />
        <CurrentLocation />
        {/* <FetchWeather/> */}
        </div>
      </Provider>
    );
  }
} 


export default App;
