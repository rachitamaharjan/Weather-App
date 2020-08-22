import {  saveweatherData } from "./redux/action";

export function weatherServiceCall(latitude,longitude){

    return (dispatch, getState) => {
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=780a4551ff3e6ac4892ab54ec1e701ec`)
        .then(response => {
          console.log('single response',response)
          return response.json()   //conversion to json
      }).then(val => {
          console.log('weather',val)
          dispatch(saveweatherData(val))
        //   this.props.saveWeather(val)
          })
    }



   

}