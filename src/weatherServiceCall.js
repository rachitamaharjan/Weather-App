import {  saveweatherData } from "./redux/action";
import {  savePieData } from "./redux/action";

export function weatherServiceCall(latitude,longitude){

    return (dispatch, getState) => {
      console.log('getstate', getState())
        // fetch(`http://`)
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=780a4551ff3e6ac4892ab54ec1e701ec&units=metric`)
        .then(response => {
          console.log('single response',response)
          return response.json()   //conversion to json
      }).then(val => {
          console.log('weather',val)
          dispatch(saveweatherData(val))
          weatherCheckCount(val,dispatch)
        //   this.props.saveWeather(val)
          })
    }



   

}
//weatherCountName
 function weatherCheckCount(weatherVal,dispatch){
   console.log('weatherval',weatherVal)
  let cloudNum = 0, clearNum = 0, snowNum = 0, rainNum = 0, drizzleNum = 0, thunderstormNum = 0;
  weatherVal.hourly.map(val => {
  switch(val.weather[0].main){
      
      case 'Clouds':
          cloudNum++;
          break;
          // console.log('clouds vitra',cloudNum)
          // this.setState( {...state, cloudNum:cloudNum++ })

      case 'Clear':
          clearNum++;
          break;

          // return {...state, Clear: }

      case 'Snow':
          snowNum++;
          break;

          // return {...state, Snow: }

      case 'Rain':
          rainNum++;
          break;

          // return {...state, Rain: }

      case 'Drizzle':
          drizzleNum++;
          break;

          // return {...state, Drizzle: }

      case 'Thunderstorm':
          thunderstormNum++;
          break;

          // return {...state, Thunderstorm: }
          
    default:
      //   weatherVal = 0;
      
  }  
  
})

dispatch(savePieData({ //real form cloudNum:cloudNum
  cloudNum, 
  clearNum, 
  snowNum,
  rainNum,
  drizzleNum,
  thunderstormNum
}))
}