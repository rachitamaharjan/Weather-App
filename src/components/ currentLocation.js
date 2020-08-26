import React from 'react';
import { connect } from 'react-redux';
import { saveBrowserLatitude, saveBrowserLongitude, saveweatherData } from '../redux/action';
import {weatherServiceCall} from '../weatherServiceCall'
import FetchWeather from './fetchWeather/fetchWeather'


class CurrentLocation extends React.Component{

  constructor(props){
    super(props)
    this.state={
      latitude:this.props.latitude,
      longitude:this.props.longitude,
    }
  }

  componentDidMount(){
    // getLocation = () => {
    if (navigator.geolocation) {
      // console.log('ho',typeof(navigator.geolocation.getCurrentPosition(this.showPosition)))
      navigator.geolocation.getCurrentPosition(this.success, this.error)
    } else { 
      alert = "Geolocation is not supported by this browser.";
    }
  }
  
  componentWillReceiveProps(nextProps){
    // console.log('willreceive', nextProps)
    const {latitude,longitude,fetchSaveWeather} = nextProps
    if(latitude && longitude){
    fetchSaveWeather(latitude,longitude)
    }
  }

   success = position => {
    // this.setState({
    //   latitude: position.coords.latitude,
    //   longitude: position.coords.longitude,
    // })
      this.props.saveLatitude(position.coords.latitude)
      this.props.saveLongitude(position.coords.longitude)
  }

  error = () => {
  }

  render(){
    return (
      <div>
        <FetchWeather/>
      </div>
    );
  }
} 


const mapStateToProps = state => {
  return{
    latitude: state.latitude,
    longitude: state.longitude
  }
}

const mapDispatchToProps = dispatch => {
  return {
      saveLatitude: (val) => dispatch(saveBrowserLatitude(val)),
      saveLongitude: (val) => dispatch(saveBrowserLongitude(val)),
      fetchSaveWeather: (lat, long) => dispatch(weatherServiceCall(lat, long))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(CurrentLocation);
