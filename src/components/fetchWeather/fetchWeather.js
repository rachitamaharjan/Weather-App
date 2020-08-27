import React from 'react';
import { connect } from "react-redux";
// import { saveweatherData } from '../../redux/action';
// import {Line} from 'react-chartjs-2';
import "./fetchWeather.css";
import temp_icon from './temperature.ico';
import pressure_icon from './pressure.svg';
import humidity_icon from './humidity.svg';
import dew_icon from './dew_point.ico';
import loading from './loading.svg';
import {DailyLineChart} from '../charts/dailyLineChart.js';
import {HourlyLineChart} from '../charts/hourlyLineChart.js';
import {WeatherPieChart} from '../charts/weatherPieChart.js';


class FetchWeather extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            Clouds: '',
            Clear: '',
            Snow: '',
            Rain: '',
            Drizzle: '',
            Thunderstorm: '',
        }
    }
   

    render() {
        if (this.props.weatherData.current){
            if(this.props.unixToHours.length ){
            console.log('uuu', this.props.unixToHours)}
            if(this.props.weatherData.current.weather[0].main){}
            // var tempInCelsius = this.toCelsius(this.props.weatherData.current.temp)
        return (
            <div className = 'weather-details clearfix'>
                <div className = 'img-info-container'>
                    <div className = 'img-info'>
                        <div className = 'weather-logo'><img src= {`http://openweathermap.org/img/wn/${this.props.weatherData.current.weather[0].icon}@2x.png`}/></div>
                        {/* <div>Latitude in fetch = {this.props.latitude}</div>
                        <div>Longitude in fetch = {this.props.longitude}</div> */}
                        <div className = 'time-temp-desc'>
                            <div className = 'selected-location'>{this.props.selectedLocation}</div>
                            <div className = 'timezone'>{this.props.weatherData.timezone}</div>
                            <div className = 'temp'> <img src = {temp_icon}/> {this.props.weatherData.current.temp}℃</div>
                            <div className = 'weather-desc'> {this.props.weatherData.current.weather[0].description} </div>
                        </div>
                    </div>
                </div>
                <ul className = 'pres-hum'>
                    <div className = 'pressure-container'>
                        <li className = 'pressure'> <img src = {pressure_icon}/> <br/> {this.props.weatherData.current.pressure} </li>
                        <p>Pressure</p>
                    </div>
                    <div className = 'humidity-container'>
                        <li className = 'humidity'> <img src = {humidity_icon}/> <br/> {this.props.weatherData.current.humidity}% </li>
                        <p>Humidity</p>
                    </div>
                    <div className = 'dew-container'>
                        <li className = 'dew-point'> <img src = {dew_icon}/> <br/> {this.props.weatherData.current.dew_point} </li>
                        <p>Dew Point</p>
                    </div>
                </ul>

                <ul className = 'chart-container'>
                    <li>
                        <WeatherPieChart weatherData = {this.props.pieChartHourly} text = {'Today\'s Overall Weather in %'}/>
                    </li>
                    <li>
                        <WeatherPieChart weatherData = {this.props.pieChartDaily} text = {'This Week\'s Overall Weather in %'}/>
                    </li>
                    <li>
                        <DailyLineChart weatherData = {this.props.weatherData} timeDay = {this.props.unixToDay}/>
                    </li>
                    <li>
                        <HourlyLineChart weatherData = {this.props.weatherData} timeHourly = {this.props.unixToHours}/>
                    </li>
                </ul>
                {/* Hourly: {this.props.weatherData.hourly.map(each => <div>{each.temp} </div>)}
                Daily temp day: {this.props.weatherData.daily.map(each => <div>{each.temp.day} </div>)} */}
            </div>
        )
        }
        else
        return(
            <div className = 'waiting-container'>
                <div className = 'waitingForData'>
                    <div className = 'waiting-packman'><img src = {loading}/></div>
                    <div >Getting Weather Information</div>
                </div>
            </div>
        )
        
    }
}

const mapStateToProps = (state) => (
    {
      latitude: state.latitude,
      longitude: state.longitude,
      weatherData: state.weatherData,
      pieChartHourly: state.pieChartHourly,
      pieChartDaily: state.pieChartDaily,
      selectedLocation: state.selectedLocation,
      unixToHours: state.unixToHours,
      unixToDay: state.unixToDay
    }
)

// const mapDispatchToProps = dispatch => {
//     console.log('dispatched')
//     return {
//         saveWeather: (val) => dispatch(saveweatherData(val))
//     }
//   }

export default connect(mapStateToProps, 0) (FetchWeather)