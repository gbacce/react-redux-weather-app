import axios from 'axios';

const API_key = '0ac8ad11115ab6d948598a01b0cc8aa5';
const baseURL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_key}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
  const url = `${baseURL}&q=${cityName},us`;
  const request = axios.get(url);              // <-- Note: This is a promise

  return {
    type: FETCH_WEATHER,
    payload: request 
  }
}