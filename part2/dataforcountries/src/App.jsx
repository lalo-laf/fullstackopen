import { useEffect, useState } from 'react'
import axios from 'axios'
import SearchField from './components/SearchField'
import Countries from './components/Countries'
import CountryInfo from './components/CountryInfo'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState("")
  const [ready, setReady] = useState(false)
  const [countryToShow, setCountryToShow] = useState(null)

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(searchFilter.toLowerCase()))

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
        setReady(true)
      })
  }, [])

  useEffect(() => {
    if (countriesToShow.length == 1) setCountryToShow(countriesToShow[0])
  }, [countriesToShow])

  const handleFilterChange = (event) => {
    setSearchFilter(event.target.value)
  }

  const handleShowButton = (country) => {
    setCountryToShow(country)
  }

  return (
    <div>
      <h1>Data for countries</h1>

      <SearchField searchFilter={searchFilter} handleFilterChange={handleFilterChange} />

      <Countries countries={countriesToShow} ready={ready} handleShowButton={handleShowButton} />

      <CountryInfo country={countryToShow} />
    </div>
  )
}

export default App