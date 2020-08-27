import {  saveweatherData } from "./redux/action";
import {  savePieDataHourly } from "./redux/action";
import {  savePieDataDaily } from "./redux/action";
import {  unixToHours } from "./redux/action";

export function weatherServiceCall(latitude,longitude){

    return (dispatch, getState) => {
      // console.log('getstate', getState())
        fetch(`http://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=780a4551ff3e6ac4892ab54ec1e701ec&units=metric`)
        .then(response => {
          // console.log('single response',response)
          return response.json()   //conversion to json
      }).then(val => {
          console.log('weather',val)
          dispatch(saveweatherData(val))
          weatherCheckCount(val.hourly,dispatch,'hour')
          weatherCheckCount(val.daily,dispatch, 'day')
          convertTime(val, dispatch)
          })
    }
}


function convertTime(weatherVal, dispatch){

  const convertedHours = weatherVal.hourly.map(val => {
    var a = new Date(val.dt * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    if (a.getHours()>12){
      hour = hour % 12
      var meridiem = ' pm'
    }
    else{ var meridiem = ' am' }
    // var min = a.getMinutes();
    // var sec = a.getSeconds();
    var time = hour + ':' + '00' + meridiem ;
    return time;
    // console.log('date', time)
  })
  // console.log('hours', convertedHours)

  dispatch(unixToHours({ //real form cloudNum:cloudNum
    unixToHours: convertedHours, 
  }))

}


//weatherCountName
 function weatherCheckCount(weatherVal,dispatch, option){
  //  console.log('weatherval',weatherVal)
  let cloudNum = 0, clearNum = 0, snowNum = 0, rainNum = 0, drizzleNum = 0, thunderstormNum = 0;
  const chartTimes = weatherVal.map(val => {
  switch(val.weather[0].main){
      
      case 'Clouds':
          cloudNum++;
          break;

      case 'Clear':
          clearNum++;
          break;

      case 'Snow':
          snowNum++;
          break;

      case 'Rain':
          rainNum++;
          break;

      case 'Drizzle':
          drizzleNum++;
          break;

      case 'Thunderstorm':
          thunderstormNum++;
          break;
          
    default:
      
    } 
  })

  cloudNum = (cloudNum/(chartTimes.length))*100
  clearNum = (clearNum/(chartTimes.length))*100
  snowNum = (snowNum/(chartTimes.length))*100
  rainNum = (rainNum/(chartTimes.length))*100
  drizzleNum = (drizzleNum/(chartTimes.length))*100
  thunderstormNum = (thunderstormNum/(chartTimes.length))*100
  
  if(option == 'hour'){

    dispatch(savePieDataHourly({ //real form cloudNum:cloudNum
      cloudNum, 
      clearNum, 
      snowNum,
      rainNum,
      drizzleNum,
      thunderstormNum
    }))
  }

  if(option == 'day'){
    console.log('inside day pie chart', weatherVal)

    dispatch(savePieDataDaily({ //real form cloudNum:cloudNum
      cloudNum, 
      clearNum, 
      snowNum,
      rainNum,
      drizzleNum,
      thunderstormNum
    }))
  }
}