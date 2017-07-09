import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component { 
  renderWeather(cityWeatherData) {
    const name = cityWeatherData.city.name;
    const temperatureArray = cityWeatherData.list.map((weather) => weather.main.temp);
    const pressureArray = cityWeatherData.list.map((weather) => weather.main.pressure);
    const humidityArray = cityWeatherData.list.map((weather) => weather.main.humidity);
    const { lon, lat } = cityWeatherData.city.coord;
    // ES6 Syntax... same as:
    //    const lon = cityData.city.coord.lon;
    //    const lat = cityData.city.coord.lat;

    // console.log(cityWeatherData)
    
    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temperatureArray} color="orange" unit="K" /></td>
        <td><Chart data={pressureArray} color="green" unit="hPa" /></td>
        <td><Chart data={humidityArray} color="black" unit="%" /></td>  
      </tr>
    )
  }

  render(){
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weatherData.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weatherData}) {
  return { weatherData }
}

export default connect(mapStateToProps)(WeatherList);


// ES6 Syntax

  // Without ES6, the entire statement above (including the return) is written as:

    // function mapStateToProps(state) {
    //   return {weather: state.weather}
    // }

  // With ES6:

    // function mapStateToProps(state) {
    //   const weather = state.weather
    //   
    // }

    // is the same as

    // function mapStateToProps({ weather }) {
    //   
    // }



