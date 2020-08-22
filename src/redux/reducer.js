const initialState = {
    latitude: '',
    longitude: '',
    EnteredLatitude: '',
    EnteredLongitude: '',
    weatherData: {}
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

//       case 'NEW_UPDATE':
//         // console.log('inside reducer top case',action.payload)
//         return {...state, newNews: action.payload}

//       case 'BEST_UPDATE':
//         // console.log('inside reducer top case',action.payload)
//         return {...state, bestNews: action.payload}

//       case 'EACH_UPDATE':
//         // console.log('inside reducer each case',action.payload)
//         // return {...state, singleNews: action.payload}
//         return {...state, singleNews: [...state.singleNews, action.payload]}

      default:
        return state;
    }
  }
  