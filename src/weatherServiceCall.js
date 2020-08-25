import {  saveweatherData } from "./redux/action";
import {  savePieData } from "./redux/action";

export function weatherServiceCall(latitude,longitude){
  const API_KEY = process.env.REACT_APP_FETCH_WEATHER_API_KEY

    return (dispatch, getState) => {
      console.log('getstate', getState())
        // fetch(`http://`)
        // fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=780a4551ff3e6ac4892ab54ec1e701ec&units=metric`)
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`)
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
          console.log('clouds vitra',val)
          break;
          // this.setState( {...state, cloudNum:cloudNum++ })

      case 'Clear':
          clearNum++;
          break;

          // return {...state, Clear: }

      case 'Snow':
          snowNum++;
          console.log('snow vitra',val)
          break;


          // return {...state, Snow: }

      case 'Rain':
          rainNum++;
          // console.log('rain vitra',val)
          break;

          // return {...state, Rain: }

      case 'Drizzle':
          drizzleNum++;
          // return {...state, Drizzle: }
          break;

      case 'Thunderstorm':
          thunderstormNum++;
          break;

          // return {...state, Thunderstorm: }
          
    default:
      //   weatherVal = 0;
      
  }  
  console.log('cloudnum outside of switch case',snowNum)
  
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