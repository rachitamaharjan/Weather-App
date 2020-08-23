import React from 'react';
import {Pie} from 'react-chartjs-2';
import { connect } from "react-redux";
import './chart.css';



export class WeatherPieChart extends React.Component {
    constructor(props) {
        super(props)
        console.log('props aayo',this.props)
        this.state= {
          labels: ['Sun', 'Mon', 'Tue',
                     'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [
            {
              label: 'Weather',
              backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F'
              ],
              data: this.props
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
                                    <Pie
                        data={this.state}
                        options={{
                            title:{
                            display:true,
                            text:'This Week\' Weather Values',
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
                            }
                        }}
                    />
                    </div>
            )}

}

// export default connect(mapStateToProps, 0) (LineChart)