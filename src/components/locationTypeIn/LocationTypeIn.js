import React from 'react';
import {connect} from 'react-redux';
import ReactHTMLDatalist from "react-html-datalist";
import {saveEnteredLatitude} from '../../redux/action'
import {saveEnteredLongitude} from '../../redux/action'
import {saveSelectedLocation} from '../../redux/action'
import './locationTypeIn.css'
// ReactReduxContext; 



class LocationTypeIn extends React.Component{

    constructor(props){
        super(props);
        this.state= {
          inputValue: '',
          enteredLatitude: 0,
          enteredLongitude: 0,
          allLocation: {},
          selectedLocation: '',
          // inputLongitude: '',
        //   inputValue: ''
        }
      }
    
    componentDidMount(){


    }
    
    addtoState = (coordinates) => {
      // this.setState({
      //   enteredLatitude: coordinates[0],
      //   enteredLongitude: coordinates[1]
      // })
    }

    addLatLong = () => {

      if(this.state.enteredLatitude !== 0){
        this.props.saveEnteredLatitude(this.state.enteredLatitude)
        this.props.saveEnteredLongitude(this.state.enteredLongitude)
        this.props.saveSelectedLocation(this.state.selectedLocation)
      }
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
            return response.json()   //conversion o json
        }).then(val => {
            this.setState({
              allLocation: val,
              enteredLatitude: val.features[0].geometry.coordinates[1],
              enteredLongitude: val.features[0].geometry.coordinates[0],
              selectedLocation: val.features[0].properties.name

            })

            })
        }
      }
  
    render(){
      // console.log('alllocation',this.state.allLocation)
        if( this.state.allLocation && this.state.allLocation && Object.keys(this.state.allLocation).length !== 0){

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
        saveEnteredLongitude: (val) => dispatch(saveEnteredLongitude(val)),
        saveSelectedLocation: (val) => dispatch(saveSelectedLocation(val)),
    }
}
 

export default connect(0, mapDispatchToProps) (LocationTypeIn);