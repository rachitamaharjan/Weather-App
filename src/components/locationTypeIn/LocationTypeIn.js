import React from 'react';
import {connect} from 'react-redux';
import ReactHTMLDatalist from "react-html-datalist";
import {saveEnteredLatitude} from '../../redux/action'
import {saveEnteredLongitude} from '../../redux/action'
import './locationTypeIn.css'
// ReactReduxContext; 



class LocationTypeIn extends React.Component{

    constructor(props){
        super(props);
        this.state= {
          inputValue: '',
          enteredLatitude: 0,
          enteredLongitude: 0,
          allLocation: {}
          // inputLongitude: '',
        //   inputValue: ''
        }
      }
    
    componentDidMount(){

      // saveEnteredLatitude(this.state.enteredLatitude)
      // saveEnteredLatitude(this.state.enteredLongitude)
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
    
    addtoState = (coordinates) => {
      console.log('heyheyhey',coordinates)
      // this.setState({
      //   enteredLatitude: coordinates[0],
      //   enteredLongitude: coordinates[1]
      // })
    }

    addLatLong = () => {

      if(this.state.enteredLatitude !== 0){
        console.log('inside addlatlong coordinates', this.state.enteredLatitude, this.state.enteredLongitude);
        this.props.saveEnteredLatitude(this.state.enteredLatitude)
        this.props.saveEnteredLongitude(this.state.enteredLongitude)
      }
  
        // if(this.state.allLocation.)
        // const latitude = this.state.inputValue;
        // const longitude = this.state.inputLongitude;
        // this.props.saveEnteredLatitude(coordinates[0]);
        // this.props.saveEnteredLongitude(coordinates[1]);
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
        console.log('onchangeinput',e.target.value);
        this.setState({
          ...this.state,
          inputValue: e.target.value
        })

        // console.log('type of', typeof(e.target.value))
        if(e.target.value.length > 3){
          fetch(`https://app.geocodeapi.io/api/v1/autocomplete?text=${e.target.value}&apikey=${API_KEY}`)
          // fetch(`https://app.geocodeapi.io/api/v1/autocomplete?text=${e.target.value}&apikey=13a519f0-e691-11ea-a4f2-5fabd33d58a2`)
          .then(response => {
            // console.log('single response',response)
            return response.json()   //conversion o json
        }).then(val => {
            console.log('apiko value',val);
            console.log('features',val.features[0].geometry.coordinates)
            this.setState({
              allLocation: val,
              enteredLatitude: val.features[0].geometry.coordinates[0],
              enteredLongitude: val.features[0].geometry.coordinates[1]

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
      // console.log('alllocation',this.state.allLocation)
        if( this.state.allLocation && this.state.allLocation && Object.keys(this.state.allLocation).length !== 0){
          // console.log('features',this.state.allLocation.features)
          // const suggestedLocation = this.state.allLocation
        
        return(
            <div className = 'location-search-box'>
                <input type = "text" list = 'location-values' id = 'location-input' placeholder="Search Place..."  value = {this.state.inputValue} onChange = {this.onChangeInput}/>
                <datalist id= 'location-values'> {this.state.allLocation.features.map(eachLocation => 
                  
                    <option value= {eachLocation.properties.name} onClick= { () => this.addtoState(eachLocation.geometry.coordinates) }>{eachLocation.properties.label}</option>
                  )} </datalist> 
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

const mapDispatchToProps = dispatch =>{
    return{
        saveEnteredLatitude: (val) => dispatch(saveEnteredLatitude(val)),
        saveEnteredLongitude: (val) => dispatch(saveEnteredLongitude(val))
    }
}
 

export default connect(0, mapDispatchToProps) (LocationTypeIn);