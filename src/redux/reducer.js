const initialState = {
    latitude: '',
    longitude: '',
    EnteredLatitude: '',
    EnteredLongitude: '',
    weatherData: {},
    pieChartHourly: {},
    pieChartDaily: {},
    selectedLocation: '',
    unixToHours: []
  }

  export const mainReducer = (state = initialState, action) => {
    switch(action.type){

        case 'SAVE_BROWSER_LATITUDE':
            return {...state, latitude: action.payload}

        case 'SAVE_BROWSER_LONGITUDE':
            return {...state, longitude: action.payload}

        case 'SAVE_ENTERED_LATITUDE':
            return {...state, latitude: action.payload}

        case 'SAVE_ENTERED_LONGITUDE':
            return {...state, longitude: action.payload}

        case 'SAVE_WEATHER_DATA':
            return {...state, weatherData: action.payload}

        case 'ADD_PIE_CHART_HOURLY':
            return {...state, pieChartHourly: action.payload}

        case 'ADD_PIE_CHART_DAILY':
            return {...state, pieChartDaily: action.payload}

        case 'SAVE_SELECTED_LOCATION':
            return {...state, selectedLocation: action.payload}

        case 'UNIX_TO_HOURS':
            console.log('reducer unixto hours',action.payload)
            return {...state, unixToHours: action.payload.unixToHours}
            
      default:
        return state;
    }
  }
  
