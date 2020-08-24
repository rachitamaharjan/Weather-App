const initialState = {
    latitude: '',
    longitude: '',
    EnteredLatitude: '',
    EnteredLongitude: '',
    weatherData: {},
    pieChartValues: {}
    // snowNum: 0, 
    // rainNum: 0, 
    // cloudNum: 0, 
    // clearNum: 0, 
    // drizzleNum: 0, 
    // thunderstormNum: 0
  }

  export const mainReducer = (state = initialState, action) => {
    console.log('reducer')
    switch(action.type){

        case 'SAVE_BROWSER_LATITUDE':
        console.log('inside reducer save location case',action.payload)
            return {...state, latitude: action.payload}

        case 'SAVE_BROWSER_LONGITUDE':
        console.log('inside reducer save location case',action.payload)
            return {...state, longitude: action.payload}

        case 'SAVE_ENTERED_LATITUDE':
        console.log('inside reducer save location case',action.payload)
            return {...state, EnteredLatitude: action.payload}

        case 'SAVE_ENTERED_LONGITUDE':
        console.log('inside reducer save location case',action.payload)
            return {...state, EnteredLongitude: action.payload}

        case 'SAVE_WEATHER_DATA':
        // console.log('inside reducer top case',action.payload)
            return {...state, weatherData: action.payload}

        case 'ADD_PIE_CHART_DATA':
        // console.log('inside reducer top case',action.payload)
            return {...state, pieChartValues: action.payload}
            
      default:
        return state;
    }
  }
  