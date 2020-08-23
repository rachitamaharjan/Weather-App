import React from 'react';
import { connect } from "react-redux";
// import { saveweatherData } from '../../redux/action';
// import {Line} from 'react-chartjs-2';
import "./fetchWeather.css";
import temp_icon from './temperature.ico';
import pressure_icon from './pressure.svg';
import humidity_icon from './humidity.svg';
import dew_icon from './dew_point.ico';
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

    // componentDidMount() {
    //     console.log('here is state inside to props', this.props)
    //        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${this.props.latitude}&lon=${this.props.longitude}&appid=780a4551ff3e6ac4892ab54ec1e701ec`)
    //     .then(response => {
    //       console.log('single response',response)
    //       return response.json()   //conversion to json
    //   }).then(val => {
    //       console.log('weather',val)
    //       this.props.saveWeather(val)
    //       })

    // }

    // toCelsius = (fahrenheit) => {
    //     return (fahrenheit - 32) * 5 / 9;
    //   }

    // weatherCheck = (weatherVal) => {
    //     let cloudNum = 0, clearNum = 0, snowNum = 0, rainNum = 0, drizzleNum = 0, thunderstormNum = 0;
    //     switch(weatherVal){
            
    //         case 'Clouds':
    //             cloudNum++;
    //             console.log('clouds vitra',cloudNum)
    //             // return {...state, Clouds: }
    
    //         case 'Clear':
    //             clearNum++;
    //             // return {...state, Clear: }
    
    //         case 'Snow':
    //             snowNum++;
    //             // return {...state, Snow: }
    
    //         case 'Rain':
    //             rainNum++;
    //             // return {...state, Rain: }
    
    //         case 'Drizzle':
    //             drizzleNum++;
    //             // return {...state, Drizzle: }

    //         case 'Thunderstorm':
    //             thunderstormNum++;
    //             // return {...state, Thunderstorm: }
                
    //       default:
    //         //   weatherVal = 0;
            
    //     }  
    //     this.setState({
    //         Clouds: cloudNum,
    //         Clear: clearNum,
    //         Snow: snowNum,
    //         Rain: rainNum,
    //         Drizzle: drizzleNum,
    //         Thunderstorm: thunderstormNum,
    //     })
    //     return 0;
    // }

    render() {
        if (this.props.weatherData.current !== undefined || this.props.weatherData.hourly !== undefined  || this.props.weatherData.daily !== undefined){
            console.log('uuu', this.props.weatherData.current.weather[0].description)
            // this.weatherCheck(this.props.weatherData.daily.map(each => each.weather.main))
            // var tempInCelsius = this.toCelsius(this.props.weatherData.current.temp)
        return (
            <div className = 'weather-details clearfix'>
                <div className = 'img-info-container'>
                    <div className = 'img-info'>
                        <div className = 'weather-logo'><img src= {`http://openweathermap.org/img/wn/${this.props.weatherData.current.weather[0].icon}@2x.png`}/></div>
                        {/* <div>Latitude in fetch = {this.props.latitude}</div>
                        <div>Longitude in fetch = {this.props.longitude}</div> */}
                        <div className = 'time-temp-desc'>
                            <div className = 'timezone'>{this.props.weatherData.timezone}</div>
                            <div className = 'temp'> <img src = {temp_icon}/> {this.props.weatherData.current.temp}℃</div>
                            <div className = 'weather-desc'> {this.props.weatherData.current.weather[0].description} </div>
                        </div>
                    </div>
                </div>
                <ul className = 'pres-hum'>
                    <div>
                        <li className = 'pressure'> <img src = {pressure_icon}/> <br/> {this.props.weatherData.current.pressure} </li>
                        <p>Pressure</p>
                    </div>
                    <div>
                        <li className = 'humidity'> <img src = {humidity_icon}/> <br/> {this.props.weatherData.current.humidity}% </li>
                        <p>Humidity</p>
                    </div>
                    <div>
                        <li className = 'dew-point'> <img src = {dew_icon}/> <br/> {this.props.weatherData.current.dew_point} </li>
                        <p>Dew Point</p>
                    </div>
                </ul>
                {/* <Line
                    data={this.state}
                    options={{
                        title:{
                        display:true,
                        text:'Average Temperature Per Day',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                /> */}
                {/* <div> {this.props.weatherData.hourly[0].temp} </div>) */}
                <div className = 'chart-container'>
                    <WeatherPieChart weatherData = {this.state} />
                    <DailyLineChart weatherData = {this.props.weatherData} />
                    <HourlyLineChart weatherData = {this.props.weatherData} />
                </div>
                {/* Hourly: {this.props.weatherData.hourly.map(each => <div>{each.temp} </div>)}
                Daily temp day: {this.props.weatherData.daily.map(each => <div>{each.temp.day} </div>)} */}
            </div>
        )
        }
        else
        return(
            <div>Getting Weather Information<b>....</b></div>
        )
        
    }
}

const mapStateToProps = (state) => (
    {
      latitude: state.latitude,
      longitude: state.longitude,
      weatherData: state.weatherData
    }
)

// const mapDispatchToProps = dispatch => {
//     console.log('dispatched')
//     return {
//         saveWeather: (val) => dispatch(saveweatherData(val))
//     }
//   }

export default connect(mapStateToProps, 0) (FetchWeather)