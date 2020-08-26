const initialState = {
    latitude: '',
    longitude: '',
    EnteredLatitude: '',
    EnteredLongitude: '',
    weatherData: {},
    pieChartValues: {}
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

        case 'ADD_PIE_CHART_DATA':
            return {...state, pieChartValues: action.payload}
            
      default:
        return state;
    }
  }
  