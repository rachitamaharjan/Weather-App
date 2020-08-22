import React from 'react';
import {connect} from 'react-redux';
import {saveEnteredLatitude} from '../redux/action'
// ReactReduxContext; 


class LocationTypeIn extends React.Component{

    constructor(props){
        super(props);
        this.state= {
          inputLatitude: '',
          inputLongitude: '',
        //   inputValue: ''
        }
      }
    

    
    addLatLong = () => {

        console.log('inside addlatlong');
        const latitude = this.state.inputLatitude;
        const longitude = this.state.inputLongitude;
        this.props.saveEnteredLatitude(this.state.inputLatitude);
        this.props.saveEnteredLongitude(this.state.inputLongitude);
        // currentTodos.push(this.state.inputValue);
    
        this.setState({
        //   toDos: currentTodos,
          inputLatitude: '',
          inputLongitude: ''
        },() => {
        //   console.log(this.state.toDos);
        }) 
    }

    OnChangeLat = (e) => {
        console.log(e.target.value);
        this.setState({
          inputLatitude: e.target.value,
        })
      }

    OnChangeLong = (e) => {
        console.log(e.target.value);
        this.setState({
          inputLongitude: e.target.value,
        //   inputLongitude: [...this.state.inputLatitude, e.target.value],
        })
      }
  
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Tasks to do:</h1>
                <input type = "text" placeholder="ex: 27.72" value = {this.state.inputLatitude} onChange = {this.OnChangeLat}/>
                <input type = "text" placeholder="ex: 85.35" value = {this.state.inputLongitude} onChange = {this.OnChangeLong}/>
                <input type='button' value ='+' onClick= {this.addLatLong} />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        inputLatitude:  state.todos
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        saveEnteredLatitude: (val) => dispatch(this.saveEnteredLatitude(val))
    }
}
 

export default connect(mapStateToProps, mapDispatchToProps) (LocationTypeIn);