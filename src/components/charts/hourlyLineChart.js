import React from 'react';
import {Line} from 'react-chartjs-2';
import { connect } from "react-redux";
import './chart.css';



export class HourlyLineChart extends React.Component {
  constructor(props) {
    super(props)
    console.log('props hourly time',this.props.time)
    this.state= {
        labels: this.props.time,
        datasets: [
          {
            label: 'Temperature',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(255, 230, 109, 0.6)',
            borderColor: 'black',
            pointBackgroundColor: 'white',
            pointHoverBorderColor: 'rgb(217, 245, 60)',
            borderWidth: 2,
            pointHoverBorderWidth: 5,
            data: this.props.weatherData.hourly.map( each => each.temp )
          },
          {
            label: 'Humidity',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(238, 119, 127, 0.9)',
            borderColor: 'black',
            pointBackgroundColor: 'white',
            pointHoverBorderColor: '#e9515c',
            borderWidth: 2,
            pointHoverBorderWidth: 5,
            data: this.props.weatherData.hourly.map( each => each.humidity )
          },
          {
            label: 'Dew Point',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(101, 189, 192, 1)',
            borderColor: 'black',
            pointBackgroundColor: 'white',
            pointHoverBorderColor: '#8ff6fa',
            borderWidth: 2,
            pointHoverBorderWidth: 5,
            data: this.props.weatherData.hourly.map(each => each.dew_point )
          }
        ]
      }
}

render() {

        // this.setState({
        //     datasets: [{
        //         data: [50, 40, 50, 40, 50, 40, 50, 40]
        //     }]
            
        // })
        // this.props.weatherData.daily.map(each => each.temp.day )
        return (
            <div className = 'daily-line-chart'>
                {/* {this.props.weatherData.daily.map(each => <div>{each.temp.day}</div> )} */}
                                <Line
                    data={this.state}
                    options={{
                        title:{
                        display:true,
                        text:'Today\'s Values per hour',
                        fontFamily: 'comfortaa',
                        fontColor: 'black',
                        fontSize:20
                        },
                        scales: {
                          xAxes: [{
                              gridLines: {
                                  display: false,
                              }
                          }],
                          yAxes: [{
                              gridLines: {
                                  display: false,
                              },
                              ticks:{
                                display: false,
                              }
                          }]
                      },
                        legend:{
                          labels: {
                            fontFamily: 'comfortaa'
                           },
                        display:true,
                        position:'top'
                        }
                    }}
                />
                </div>
        )}
}

// export default connect(mapStateToProps, 0) (LineChart)