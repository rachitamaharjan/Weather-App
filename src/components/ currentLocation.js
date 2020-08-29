import React from 'react';
import { connect } from 'react-redux';
import { saveBrowserLatitude, saveBrowserLongitude } from '../redux/action';
import { weatherServiceCall } from '../weatherServiceCall'
import FetchWeather from './fetchWeather/fetchWeather'
import LoadingWeather from './loadingWeather'


class CurrentLocation extends React.Component {

  constructor(props) {
    super(props)
    this.state = { loading: false }
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.success, this.error)
    } else { alert("Geolocation is not supported by this browser.") }
  }

  componentWillReceiveProps(nextProps) {
    const { latitude, longitude, } = nextProps
    if (latitude && longitude && this.props.latitude !== latitude && this.props.longitude !== longitude) {
      this.fetchWeatherData(latitude, longitude)
    }
  }

  fetchWeatherData = (latitude, longitude) => {
    this.setState({
      loading: true
    })
    this.props.fetchSaveWeather(latitude, longitude)
      .finally(val => {
        this.setState({
          loading: false
        })
      }
      )
  }

  success = position => {
    this.props.saveLatitude(position.coords.latitude)
    this.props.saveLongitude(position.coords.longitude)
    this.fetchWeatherData(position.coords.latitude, position.coords.longitude)
  }

  error = error => {
    console.log(error)
    alert('We won\'t be able to get your location, but no worries, you can still type in a place to get the weather of that place 🤗');
    this.setState({
      Location: false
    })
  }

  render() {

    if (this.state.loading) { return (<LoadingWeather />) }
    if (this.props.weatherData.current) return (<FetchWeather />)
    if (this.props.searchText === '') {
      return (
        <div className='do-input-container'>
          <div className='do-input-data'>
            <p>Enter a location above!</p>
          </div>
        </div>)
    }
    return (<div></div>)
  }
}


const mapStateToProps = state => {
  return {
    latitude: state.latitude,
    longitude: state.longitude,
    weatherData: state.weatherData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveLatitude: (val) => dispatch(saveBrowserLatitude(val)),
    saveLongitude: (val) => dispatch(saveBrowserLongitude(val)),
    fetchSaveWeather: (lat, long) => dispatch(weatherServiceCall(lat, long))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CurrentLocation);
