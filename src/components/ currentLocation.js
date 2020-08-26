import React from 'react';
import { connect } from 'react-redux';
import { saveBrowserLatitude, saveBrowserLongitude, saveweatherData } from '../redux/action';
import {weatherServiceCall} from '../weatherServiceCall'
import FetchWeather from './fetchWeather/fetchWeather'


class CurrentLocation extends React.Component{

  constructor(props){
    super(props)
    this.state={
      latitude:0,
      longitude:0,
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
    console.log('after')
  }
  
   success = position => {
    console.log('lattt longg',position)
    this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
      this.props.saveLatitude(position.coords.latitude)
      this.props.saveLongitude(position.coords.longitude)
      // this.props.fetchSaveWeather(position.coords.latitude,position.coords.longitude)


     
      // fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=780a4551ff3e6ac4892ab54ec1e701ec`)
      //   .then(response => {
      //     console.log('single response',response)
      //     return response.json()   //conversion to json
      // }).then(val => {
      //     console.log('weather',val)
      //     this.props.saveWeather(val)
      //     })
      //   fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=780a4551ff3e6ac4892ab54ec1e701ec`)
      //   .then(response => {
      //     console.log('single response',response)
      //     return response.json()   //conversion to json
      // }).then(val => {
      //     console.log('weather',val)
      //     })

  }

  error = () => {
    console.log('Error fetching location')
  }

  render(){
    this.props.fetchSaveWeather(this.state.latitude,this.state.longitude)


    // const  getLocation = () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //   } else { 
    //     alert = "Geolocation is not supported by this browser.";
    //   }
    // }
    
    // const showPosition = position => {
    //    this.setState({
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude
    //    });
    // }

    
    
    return (
      <div>
        {/* {this.props.latitude}
        {this.props.longitude} */}
        <FetchWeather/>
      </div>
    );
  }
} 

// const  getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     alert = "Geolocation is not supported by this browser.";
//   }
// }

// const showPosition = position => {
//    this.setState({
//     latitude: position.coords.latitude,
//     longitude: position.coords.longitude
//    });
// }
const mapStateToProps = state => {
  return{
    latitude: state.latitude,
    longitude: state.longitude
  }
}

const mapDispatchToProps = dispatch => {
  console.log('dispatched')
  return {
      saveLatitude: (val) => dispatch(saveBrowserLatitude(val)),
      saveLongitude: (val) => dispatch(saveBrowserLongitude(val)),
      fetchSaveWeather: (lat, long) => dispatch(weatherServiceCall(lat, long))
      // fetchWeatherForChart: (lat, long) => dispatch(weatherServiceCall(lat, long))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(CurrentLocation);
// export default CurrentLocation;
