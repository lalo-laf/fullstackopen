import { useEffect, useState } from 'react'
import axios from 'axios'
import SearchField from './components/SearchField'
import Countries from './components/Countries'
import CountryInfo from './components/CountryInfo'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchFilter, setSearchFilter] = useState("")

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(searchFilter.toLowerCase()))
  const showDetails = countriesToShow.length == 1 ? true : false

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setSearchFilter(event.target.value)
  }

  return (
    <div>
      <h1>Data for countries</h1>

      <SearchField searchFilter={searchFilter} handleFilterChange={handleFilterChange} />

      <Countries countries={countriesToShow} />

      <CountryInfo showDetails={showDetails} country={countriesToShow[0]} />
    </div>
  )
}

export default App