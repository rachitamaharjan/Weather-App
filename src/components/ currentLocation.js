import React from 'react';

class CurrentLocation extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0
    };
  }

  UNSAFE_componentWillMount(){
    // getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
      alert = "Geolocation is not supported by this browser.";
    }
  }
  
   showPosition = position => {
     this.setState({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
     });
  }

  render(){

    // const  getLocation = () => {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //   } else { 
    //     alert = "Geolocation is not supported by this browser.";
    //   }
    // }
    
    // const showPosition = position => {
    //    this.setState({
    //     latitude: position.coords.latitude,
    //     longitude: position.coords.longitude
    //    });
    // }

    
    // this.getLocation()

    console.log('this',this)
    console.log('this val',this.state.latitude)
    
    return (
      <div>
      <h1>Latitude: {this.state.latitude}</h1>
      <h1>Longitude: {this.state.longitude}</h1>
      </div>
    );
  }
} 

// const  getLocation = () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     alert = "Geolocation is not supported by this browser.";
//   }
// }

// const showPosition = position => {
//    this.setState({
//     latitude: position.coords.latitude,
//     longitude: position.coords.longitude
//    });
// }


export default CurrentLocation;
