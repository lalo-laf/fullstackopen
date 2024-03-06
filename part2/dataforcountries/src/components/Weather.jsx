const Weather = ({ weather }) => {
  if (weather === null) return (<div> Unknown weather </div>)

  return (
    <div>
      <div> Temperature: {(weather.main.temp - 273.15).toFixed(2)} Celsius </div>
      <div> Description: {weather.weather[0].description} </div>
      <div> Wind: {weather.wind.speed} m/s </div>
      <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
    </div>
  )
}

export default Weather