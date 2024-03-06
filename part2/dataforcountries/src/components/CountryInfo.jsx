import { useEffect, useState } from 'react'
import axios from 'axios'
import Weather from './Weather'

const CountryInfo = ({ country }) => {
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (country) {
      if (country.capitalInfo.latlng) {
        setWeather(null)
        const lat = country.capitalInfo.latlng[0]
        const lng = country.capitalInfo.latlng[1]
        const apiKey = import.meta.env.VITE_OPENWEATHER_KEY
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`)
          .then(response => {
            setWeather(response.data)
          })
      } else {
        setWeather(null)
      }
    }
  }, [country])

  if (country === null) return null

  const name = country.name.common
  const capital = country.capital ?
    country.capital.map((current, index, arr) => current + (index==arr.length-1 ? "" : ", ")) : "None"
  const area = country.area
  const languages = country.languages ? Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>) : "None"

  return (
    <div>
      <h2> {name} </h2>
      <div> Capital: {capital} </div>
      <div> Area: {area} </div>
      <h3> languages: </h3>
      <ul> {languages} </ul>
      <img src={country.flags.png} alt={country.flags.alt} height={100} />
      <h3> Weather in {capital} </h3>
      <Weather weather={weather} />
    </div>
  )
}

export default CountryInfo