import React from 'react';
import {Line} from 'react-chartjs-2';
import './chart.css';

const getLineChartConfig = (timeDay, weatherDataDay) =>{
  return{
    labels: timeDay,
            datasets: [
              {
                label: 'Temperature',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(255, 230, 109, 0.8)',
                borderColor: 'black',
                pointBackgroundColor: 'white',
                pointHoverBorderColor: 'rgb(217, 245, 60)',
                borderWidth: 2,
                pointHoverBorderWidth: 5,
                data: weatherDataDay.map(each => each.temp.day )
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
                data: weatherDataDay.map(each => each.humidity )
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
                data: weatherDataDay.map(each => each.dew_point )
              }
            ]
  }
}


export class DailyLineChart extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
            return (
                <div className = 'daily-line-chart'>
                    <Line
                        data={ getLineChartConfig(this.props.timeDay, this.props.weatherData.daily) }
                        options={{
                          title:{
                            display:true,
                            text:'This Week\'s Values per day',
                            fontColor: 'black',
                            fontFamily: 'comfortaa',
                            fontSize:20
                            },
                          scales:{
                            xAxes: [{ 
                                gridLines: { display: false },
                                ticks: {
                                  fontSize: 8,
                                  beginAtZero: true,
                                },
                                /* Keep x-axis width proportional to overall chart width */
                                afterFit: function(scale) {
                                var chartWidth = scale.chart.width;
                                var new_width=chartWidth*0.40;
                                scale.width = new_width;
                                }
                            }],
                            yAxes: [{
                                gridLines: { display: false },
                                ticks: { display: false }
                              }]
                          },
                          legend:{
                              labels: { fontFamily: 'comfortaa' },
                              display:true,
                              position:'top'
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
                                c.options.elements.point.radius = 0.1;
                                c.options.elements.point.hoverRadius = 0.5;
                                c.options.elements.point.borderWidth = 0;
                                c.options.elements.line.borderWidth = 0.1;
                                c.options.elements.point.hoverBorderWidth = 0.5;
                                c.legend.top = 30;
                                c.legend.bottom = 40;
                                c.chartArea.top = size * 4;
                              }
                              c.scales['x-axis-0'].options.ticks.minor.fontSize = size;                              
                              console.log('c value',c)
                          }
                       }]}
                    />
                    </div>
            )}

}

