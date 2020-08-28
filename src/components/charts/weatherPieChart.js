import React from 'react';
import {Pie} from 'react-chartjs-2';
import './chart.css';



export class WeatherPieChart extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
      
      if (this.props.weatherData === undefined || Object.keys(this.props.weatherData).length === 0 ){
        return null
      }
      else{
          const pieChartData = {
            labels: ['Cloudy', 'Clear', 'Snow',
                        'Rain', 'Drizzle', 'Thunderstorm'],
            datasets: [
              {
                label: 'Weather',
                backgroundColor: [
                  '#91bffc',
                  'rgb(255, 230, 109)',
                  '#FFFFFF',
                  '#1D2343',
                  '#65BDC0',
                  '#EE777F '
                ],
                hoverBackgroundColor: [
                  '#e4e4f0',
                  'rgb(218, 203, 132)',
                  '#f5d1d1',
                  '#003350',
                  '#73d1d4',
                  '#c7777d'
                ],
                borderColor:[ 'black','black','black','black','black','black' ],
                borderWidth: 2,
                hoverBorderColor: [ 'gray','gray','gray','gray','gray','gray' ],
                hoverBorderWidth: 5,
                data: [
                  Number(this.props.weatherData.cloudNum).toFixed(2), 
                  Number(this.props.weatherData.clearNum).toFixed(2), 
                  Number(this.props.weatherData.snowNum).toFixed(2), 
                  Number(this.props.weatherData.rainNum).toFixed(2), 
                  Number(this.props.weatherData.drizzleNum).toFixed(2),
                  Number(this.props.weatherData.thunderstormNum).toFixed(2) 
                ]
              }
            ]
          }
          return (
              <div className = 'weather-pie-chart'>
                    <Pie
                        data={ pieChartData }
                        options={{
                            title:{
                            display:true,
                            text:this.props.text,
                            fontColor: 'black',
                            fontFamily: 'comfortaa',
                            fontSize:20
                            },
                            legend:{
                              labels: {
                                fontFamily: 'comfortaa'
                              },
                            display:true,
                            position:'top'
                            },
                            chartArea: {
                              backgroundColor: 'red'
                          }
                        }}
                        plugins = {[{
                            /* Adjust axis labelling font size according to chart size */
                            beforeDraw: function(c) {
                                var chartHeight = c.chart.height;
                                if(chartHeight < 250){
                                  var size = chartHeight * 5 / 100;
                                  var boxSize = chartHeight * 10 / 100;
                                  c.legend.options.labels.boxWidth = boxSize;
                                  c.legend.options.labels.fontSize = size;
                                  c.options.title.fontSize = size * 2;
                                  c.legend.top = 30;
                                  c.legend.bottom = 40;
                                }
                            }
                      }]}
                    />
              </div>
          )
      }
    }
}
