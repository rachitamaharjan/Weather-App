import React from 'react';
import {Pie} from 'react-chartjs-2';
import { connect } from "react-redux";
import './chart.css';



export class WeatherPieChart extends React.Component {
    constructor(props) {
        super(props)
        console.log('props aayo',this.props)
        // this.state= {
        //   labels: ['Cloudy', 'Clear', 'Snow',
        //              'Rain', 'Drizzle', 'Thunderstorm'],
        //   datasets: [
        //     {
        //       label: 'Weather',
        //       backgroundColor: [
        //         '#1D2343',
        //         '#65BDC0',
        //         '#EE777F',
        //         'rgb(255, 230, 109)',
        //         '#FFF5F5'
        //       ],
        //       hoverBackgroundColor: [
        //       '#501800',
        //       '#4B5000',
        //       '#175000',
        //       '#003350',
        //       '#35014F'
        //       ],
        //       data: this.props.
        //       // this.props.pieChartValues
        //     }
        //   ]
        // }
    }

    render() {

      if (this.props.weatherData === undefined || Object.keys(this.props.weatherData).length === 0 ){
        console.log('nop')
        return null
      }
      else{
        console.log('yup')
            const pieChartData = {
              labels: ['Cloudy', 'Clear', 'Snow',
                         'Rain', 'Drizzle', 'Thunderstorm'],
              datasets: [
                {
                  label: 'Weather',
                  backgroundColor: [
                    '#1D2343',
                    '#65BDC0',
                    '#EE777F',
                    'rgb(255, 230, 109)',
                    '#FFF5F5'
                  ],
                  hoverBackgroundColor: [
                  '#501800',
                  '#4B5000',
                  '#175000',
                  '#003350',
                  '#35014F'
                  ],
                  data: [this.props.weatherData.cloudNum, 
                    this.props.weatherData.clearNum, 
                    this.props.weatherData.snowNum, 
                    this.props.weatherData.rainNum, 
                    this.props.weatherData.drizzleNum,
                    this.props.weatherData.thunderstormNum ]
                  // this.props.pieChartValues
                }
              ]
            }

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
                        data={pieChartData}
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
}

// const mapStateToProps = (state) => (
//   {
//     pieChartValues: state.pieChartValues
//   }
// )

// export default connect(mapStateToProps, 0) (WeatherPieChart)