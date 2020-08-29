
export const saveBrowserLatitude = (payload) => ({
  type: 'SAVE_BROWSER_LATITUDE',
  payload
})

export const saveBrowserLongitude = (payload) => ({
  type: 'SAVE_BROWSER_LONGITUDE',
  payload
})


export const saveEnteredLatitude = (payload) => ({
  type: 'SAVE_ENTERED_LATITUDE',
  payload
})

export const saveEnteredLongitude = (payload) => ({
  type: 'SAVE_ENTERED_LONGITUDE',
  payload
})

export const saveweatherData = (payload) => ({
  type: 'SAVE_WEATHER_DATA',
  payload
})

export const saveSelectedLocation = (payload) => ({
  type: 'SAVE_SELECTED_LOCATION',
  payload
})

export const savePieDataHourly = (payload) => ({
  type: 'ADD_PIE_CHART_HOURLY',
  payload
})

export const savePieDataDaily = (payload) => ({
  type: 'ADD_PIE_CHART_DAILY',
  payload
})

export const unixToHours = (payload) => ({
  type: 'UNIX_TO_HOURS',
  payload
})

export const unixToDay = (payload) => ({
  type: 'UNIX_TO_DAY',
  payload
})


