import React from 'react';
import { connect } from "react-redux";
import { saveweatherData } from '../redux/action';

class FetchWeather extends React.Component {
    constructor(props) {
        super(props)
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

    render() {
        if (this.props.weatherData.current !== undefined || this.props.weatherData.hourly !== undefined  || this.props.weatherData.daily !== undefined){
            console.log('uuu', this.props.weatherData.current.weather[0].description)
        return (
            <div style={{ flexDirection: 'column' }}>
                <div>Latitude in fetch = {this.props.latitude}</div>
                <div>Longitude in fetch = {this.props.longitude}</div>
                <div>Place = {this.props.weatherData.timezone}</div>
                Current temp: <div> {this.props.weatherData.current.temp} </div>
                Current pressure: <div> {this.props.weatherData.current.pressure} </div>
                Current humidity: <div> {this.props.weatherData.current.humidity} </div>
                Current Weather: <div> {this.props.weatherData.current.weather[0].description} </div>
                {/* <div> {this.props.weatherData.hourly[0].temp} </div>) */}
                Hourly: {this.props.weatherData.hourly.map(each => <div>{each.temp} </div>)}
                Daily temp day: {this.props.weatherData.daily.map(each => <div>{each.temp.day} </div>)}
            </div>
        )
        }
        else
        return(
            <div>nothing yet</div>
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