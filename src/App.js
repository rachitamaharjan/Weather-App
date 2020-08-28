import React from 'react';
import './App.css';
import CurrentLocation from './components/ currentLocation'
import LocationTypeIn from './components/locationTypeIn/LocationTypeIn'
import store from './redux/store';
import { Provider } from 'react-redux';

class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      searchText: ''
    }
      
    
  }

  onSearchTextChange = (searchText) => {
      this.setState({
        searchText
      })
  }
  render(){

    return (
      <Provider store = {store}>
        <div className = 'main-wrapper'>
        <LocationTypeIn searchText = {this.state.searchText} onSearchTextChange = {this.onSearchTextChange} />
        <CurrentLocation searchText = {this.state.searchText} />
        </div>
      </Provider>
    );
  }
} 


export default App;
