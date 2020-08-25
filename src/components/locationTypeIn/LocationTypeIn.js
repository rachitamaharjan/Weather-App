import React from 'react';
import {connect} from 'react-redux';
import {saveEnteredLatitude} from '../../redux/action'
import './locationTypeIn.css'
// ReactReduxContext; 



export class LocationTypeIn extends React.Component{

    constructor(props){
        super(props);
        this.state= {
          inputValue: '',
          allLocation: {}
          // inputLongitude: '',
        //   inputValue: ''
        }
      }
    
    componentDidMount(){
      // fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
      // fetch(`https://app.geocodeapi.io/api/v1/autocomplete?text=666%20Fifth%20Ave&apikey=${API_KEY}`)
      //   .then(response => {
      //     console.log('single response',response)
      //     return response.json()   //conversion to json
      // }).then(val => {
      //     console.log('weather',val)
      //     dispatch(saveweatherData(val))
      //     weatherCheckCount(val,dispatch)
      //   //   this.props.saveWeather(val)
      //     })

    }
    
    addLatLong = () => {

        console.log('inside addlatlong');
        // const latitude = this.state.inputValue;
        // const longitude = this.state.inputLongitude;
        // this.props.saveEnteredLatitude(this.state.inputValue);
        // this.props.saveEnteredLongitude(this.state.inputLongitude);
        // currentTodos.push(this.state.inputValue);
    
        // this.setState({
        // //   toDos: currentTodos,
        //   inputValue: '',
        // },() => {
        // //   console.log(this.state.toDos);
        // }) 
    }

    onChangeInput = (e) => {
      const API_KEY = process.env.REACT_APP_AUTOCOMPLETE_API_KEY;
        console.log(e.target.value);
        this.setState({
          ...this.state,
          inputValue: e.target.value
        })

        console.log('type of', typeof(e.target.value))
        if(e.target.value.length > 3){
          fetch(`https://app.geocodeapi.io/api/v1/autocomplete?text=${e.target.value}&apikey=${API_KEY}`)
          // fetch(`https://app.geocodeapi.io/api/v1/autocomplete?text=${e.target.value}&apikey=13a519f0-e691-11ea-a4f2-5fabd33d58a2`)
          .then(response => {
            console.log('single response',response)
            return response.json()   //conversion to json
        }).then(val => {
            console.log('apiko value',val.features[0].geometry)
            this.setState({
              allLocation: val,
            })
            // dispatch(saveweatherData(val))
            // weatherCheckCount(val,dispatch)
          //   this.props.saveWeather(val)
            })
        }
      }

    // OnChangeLong = (e) => {
    //     console.log(e.target.value);
    //     this.setState({
    //       inputLongitude: e.target.value,
    //     //   inputLongitude: [...this.state.inputValue, e.target.value],
    //     })
    //   }
  
    render(){
      console.log('alllocation',this.state.allLocation)
        if( this.state.allLocation !== null && this.state.allLocation !== undefined && Object.keys(this.state.allLocation).length !== 0){
          console.log('features',this.state.allLocation.features)
          // const suggestedLocation = this.state.allLocation
        
        return(
            <div className = 'location-search-box'>
                <input type = "text" list = 'location-values' id = 'location-input' placeholder="Search Place..." value = {this.state.inputValue} onChange = {this.onChangeInput}/>
                {/* <input list="browsers" name="browser"> */}
                <datalist id= 'location-values'> {this.state.allLocation.features.map(eachLocation => 
                  
                    <option value= {eachLocation.properties.name} />
                  )} </datalist>
                  {/* this.props.weatherData.hourly.map(each => <div>{each.temp} </div>) */}
                  {/* <option value="Firefox" />
                  <option value="Chrome" />
                  <option value="Opera" />
                  <option value="Safari" /> */}
                <input type='button' className = 'location-search-button' onClick= {this.addLatLong} />
                
            </div>
        )
      }
      else{
        return(
          <div className = 'location-search-box'>
                <input type = "text" list = 'location-values' id = 'location-input' placeholder="Search Place..." value = {this.state.inputValue} onChange = {this.onChangeInput}/>
                {/* <input list="browsers" name="browser"> */}
                <input type='button' className = 'location-search-button' onClick= {this.addLatLong} />
                
            </div>
        )
      }
    }
}

// const mapStateToProps = state =>{
//     return{
//         inputValue:  state.todos
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return{
//         saveEnteredLatitude: (val) => dispatch(this.saveEnteredLatitude(val))
//     }
// }
 

// export default connect(mapStateToProps, mapDispatchToProps) (LocationTypeIn);